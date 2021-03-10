import { useClientTestsContext } from './index';

export default function ClientAllTests() {
  const { compTestCodes, setSelectedTest } = useClientTestsContext();

  return (
    <div className='site__sub-section client-tests__sub-section comp-tests'>
      <h2 className='comp-tests__title'>Completed Tests</h2>
      <ul className='comp-tests__list'>
        {compTestCodes.map((testCode) => {
          return (
            <li
              onClick={() => {
                setSelectedTest(testCode);
              }}
            >
              {testCode}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
