import { useClientTestsContext } from '../../pages/Client';

// import css
import './Client.css';

export default function ClientAllTests() {
  const {
    compTestObjs,
    setSelectedTest,
    setDatapoint,
  } = useClientTestsContext();

  return (
    <div className='site__sub-section flex-dir-col'>
      <h2 className='comp-tests__title cntr-txt-sml-margin'>Test Results</h2>
      <ul className='comp-tests__list'>
        {compTestObjs.map((testObj) => {
          return (
            <li
              key={testObj.code}
              className='comp-tests__option'
              onClick={() => {
                setSelectedTest(testObj);
                setDatapoint(null);
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
