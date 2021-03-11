import { useClientTestsContext } from './index';

export default function ClientAllTests() {
  const {
    compTestObjs,
    setSelectedTest,
  } = useClientTestsContext();

  return (
    <div className='site__sub-section client-tests__sub-section comp-tests'>
      <h2 className='comp-tests__title'>Completed Tests</h2>
      <ul className='comp-tests__list'>
        {compTestObjs.map((testObj) => {
          return (
            <li
              key={testObj.code}
              className='comp-tests__option'
              onClick={() => {
                setSelectedTest(testObj);
              }}
            >
              {testObj.abbr}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
