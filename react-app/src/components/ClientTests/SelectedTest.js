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
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className='site__sub-section chart-container'>
      <h3>{selectedTest.name}</h3>
      <Line data={data} />
    </div>
  );
}
