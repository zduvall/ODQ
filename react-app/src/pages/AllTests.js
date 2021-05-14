// import test objects and array of free tests
import tests, { freeTests } from '../assets';

// import components
import TestInfo from '../components/AllTests/TestInfo';
import PremiumBadge from '../components/PremiumBadge';

// import css
import '../components/AllTests/AllTests.css';

export default function AllTests() {
  // close all other details elements when opening a new one
  function handleClick(e) {
    const details = document.querySelectorAll('details');
    details.forEach((detail) => {
      if (!detail.contains(e.target)) {
        detail.removeAttribute('open');
      }
    });
  }

  return (
    <div className='site__page'>
      <h1 className='primary-title'>Available Tests</h1>
      <div className='site__sub-section'>
        <div className='all-tests-list'>
          {Object.values(tests).map((test) => (
            <details
              key={test.code}
              className='test-details'
              onClick={handleClick}
            >
              <summary className='test-summary'>
                {test.abbr}{' '}
                {!freeTests.includes(test.code) ? (
                  <>
                    <PremiumBadge />{' '}
                  </>
                ) : (
                  ''
                )}
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
