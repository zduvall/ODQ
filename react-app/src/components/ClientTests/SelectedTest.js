import { useClientTestsContext } from './index';

export default function SelectedTest() {
  const { selectedTest, clientTests } = useClientTestsContext();

  const allTestsOfType = clientTests.filter(
    (test) => test.testCode === selectedTest
  );

  return (
    <div className='site__sub-section'>
      <h3>{selectedTest}</h3>
      <h4>{allTestsOfType.length}</h4>
    </div>
  );
}
