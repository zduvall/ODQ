import { useClientTestsContext } from '../../pages/Client';

// import css
import './Client.css';

export default function CompletedTests() {
  const {
    client,
    compTestObjs,
    setSelectedTest,
    setDatapoint,
    setDropdownTest,
  } = useClientTestsContext();

  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>Test Results</h2>
      <ul
        className={`comp-tests__list ${
          compTestObjs.length >= 7
            ? 'seven-or-more'
            : compTestObjs.length >= 5
            ? 'five-or-more'
            : compTestObjs.length >= 2
            ? 'two-or-more'
            : ''
        }`}
      >
        {compTestObjs.map((testObj) => {
          return (
            <li
              key={testObj.code}
              className={`comp-tests__option ${
                client.unseenTests.includes(testObj.code) ? 'primary-title' : ''
              }`}
              onClick={() => {
                setSelectedTest(testObj);
                setDatapoint(null);
                setDropdownTest({ code: '' });
              }}
            >
              {testObj.abbr}
            </li>
          );
        })}
      </ul>
    </>
  );
}
