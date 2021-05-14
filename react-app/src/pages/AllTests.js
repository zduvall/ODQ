// import test objects and array of premium tests
import tests from '../assets/index';

// import component
import TestInfo from '../components/AllTests/TestInfo';

// import css
import '../components/AllTests/AllTests.css';

export default function AllTests() {
  return (
    <div className='site__page'>
      <h1 className='primary-title'>Available Tests</h1>
      <div className='site__sub-section'>
        <div className='all-tests-list'>
          {Object.values(tests).map((test) => (
            <details key={test.code} className='test-details'>
              <summary className='test-summary'>
                {test.abbr}{' '}
                <span className='tertiary-text'>({test.target})</span>
              </summary>
              <div className='test-info'>
                <TestInfo test={test} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
