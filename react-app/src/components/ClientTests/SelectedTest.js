import { useClientTestsContext } from './index';

// import chart
import { Line } from 'react-chartjs-2';

export default function SelectedTest() {
  const { selectedTest, clientTests } = useClientTestsContext();

  const allTestsOfType = clientTests.filter(
    (test) => test.testCode === selectedTest.code
  );

  const data = {
    labels: selectedTest.chartData.labels(allTestsOfType),
    datasets: [
      {
        label: 'Score History',
        data: selectedTest.chartData.dataPoints(allTestsOfType),
        fill: false,
        backgroundColor: 'rgb(242, 150, 88)',
        borderColor: 'rgb(238, 114, 32)',
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    title: {
      display: true,
      text: `This chart`,
      // padding: 15,
      fontSize: 23,
      fontColor: 'rgb(242, 150, 88)',
    },
  };

  return (
    <div className='site__sub-section chart-container'>
      <h3>{selectedTest.name}</h3>
      <Line data={data} options={options} />
    </div>
  );
}
