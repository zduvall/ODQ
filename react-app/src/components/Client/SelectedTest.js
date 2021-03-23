import { useEffect } from 'react';

// import component
import SelectedDataPoint from './SelectedDataPoint';

// import context
import { useClientTestsContext } from '../../pages/Client';

// import css
import './Client.css';

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

  const allTestResOfType = clientTests.filter(
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
    labels: dateLabels(allTestResOfType),
    datasets: [
      {
        label: 'Test Scores',
        data: selectedTest.chartData.datapoints(allTestResOfType),
        fill: false,
        backgroundColor: 'rgb(238, 114, 32)',
        borderColor: 'rgb(242, 150, 88)',
        pointRadius: 4,
        pointHitRadius: 15,
      },
    ],
  };

  const options = selectedTest.chartOptions;

  // add chart options that exist on all charts
  selectedTest.chartOptions.onClick = (e, element) => {
    if (element[0]) {
      setDatapoint(allTestResOfType[element[0]._index]);
    }
  };
  selectedTest.chartOptions.onHover = (e, element) => {
    e.target.style.cursor = element[0] ? 'pointer' : 'default';
  };

  // make most recent data point (test res) default to being selected
  useEffect(() => {
    if (!datapoint && datapoint !== false) {
      setDatapoint(allTestResOfType[allTestResOfType.length - 1]);
    }
  }, [datapoint, setDatapoint, allTestResOfType]);

  return (
    <>
      <div className='site__sub-section chart-container'>
        <i
          class='fas fa-info-circle'
          // onClick={() => setShowInfoModal(true)}
        ></i>
        <h3 className='cntr-txt-sml-margin'>{selectedTest.name}</h3>
        <Line data={data} options={options} />
      </div>
      {datapoint && (
        <>
          <div className='one1rem-ht' />
          <SelectedDataPoint datapoint={datapoint} />
        </>
      )}
    </>
  );
}
