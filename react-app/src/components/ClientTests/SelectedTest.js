import { useClientTestsContext } from './index';

// import chart
import { Line } from 'react-chartjs-2';

export default function SelectedTest() {
  const { selectedTest, clientTests } = useClientTestsContext();

  const allTestsOfType = clientTests.filter(
    (test) => test.testCode === selectedTest.code
  );

  function dateLabels(tests) {
    const dates = [];
    tests.forEach((test) => {
      const date = new Date(test.timeComp);
      dates.push(date.toDateString());
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

  const options = {
    scales: selectedTest.chartOptions.scales,
  };

  return (
    <div className='site__sub-section chart-container'>
      <h3>{selectedTest.name}</h3>
      <Line data={data} options={options} />
    </div>
  );
}
