import { useClientTestsContext } from './index';

// import chart and annotator
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
Chart.plugins.register([ChartAnnotation]); // Global

export default function SelectedTest() {
  const { selectedTest, clientTests } = useClientTestsContext();

  const allTestsOfType = clientTests.filter(
    (test) => test.testCode === selectedTest.code
  );

  function dateLabels(tests) {
    const dates = [];
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
        data: selectedTest.chartData.dataPoints(allTestsOfType),
        fill: false,
        backgroundColor: 'rgb(238, 114, 32)',
        borderColor: 'rgb(242, 150, 88)',
        pointRadius: 4,
        pointHitRadius: 15,
      },
    ],
  };

  const options = selectedTest.chartOptions;

  return (
    <div className='site__sub-section chart-container'>
      <h3>{selectedTest.name}</h3>
      <Line data={data} options={options} />
    </div>
  );
}
