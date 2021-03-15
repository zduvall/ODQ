import { useState } from 'react';

// import component
import SelectedDataPoint from './SelectedDataPoint'

// import context
import {useClientTestsContext} from './index'

// import chart and annotator
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
Chart.plugins.register([ChartAnnotation]); // Global registering of plugin

export default function SelectedTest() {
  const {
    selectedTest,
    clientTests,
    datapoint,
    setDatapoint,
  } = useClientTestsContext();
  const [datapointDate, setDatapointDate] = useState();

  const allTestsOfType = clientTests.filter(
    (test) => test.testCode === selectedTest.code
  );

  const dates = [];

  function dateLabels(tests) {
    tests.forEach((test) => {
      let date = new Date(test.timeComp);
      const yr = ('' + date.getFullYear()).slice(-2);
      const mth = ('' + (date.getMonth() + 1)).slice(-2);
      const dy = ('' + date.getDate()).slice(-2);

      date = mth + '/' + dy + '/' + yr;
      dates.push(date);
    });
    return dates;
  }

  const data = {
    labels: dateLabels(allTestsOfType),
    datasets: [
      {
        label: 'Test Scores',
        data: selectedTest.chartData.datapoints(allTestsOfType),
        fill: false,
        backgroundColor: 'rgb(238, 114, 32)',
        borderColor: 'rgb(242, 150, 88)',
        pointRadius: 4,
        pointHitRadius: 15,
      },
    ],
  };

  selectedTest.chartOptions.onClick = (e, element) => {
    if (element[0]) {
      setDatapoint(allTestsOfType[element[0]._index]);
      setDatapointDate(dates[element[0]._index]);
    }
  };
  selectedTest.onHover = (e, element) => {
    console.log(element[0]);
    e.target.style.cursor = element[0] ? 'pointer' : 'default';
  };

  const options = selectedTest.chartOptions;

  return (
    <>
      <div className='site__sub-section chart-container'>
        <h3 className='cntr-txt-sml-margin'>{selectedTest.name}</h3>
        <Line data={data} options={options} />
      </div>
      {datapoint && (
        <>
          <div className='one1rem-ht' />
          <SelectedDataPoint datapoint={datapoint} date={datapointDate} />
        </>
      )}
    </>
  );
}
