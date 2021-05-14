// import test objects
import tests from '../assets';

// import components
import TestDetailsElement from '../components/AllTests/TestDetailsElement';

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
            <TestDetailsElement
              key={test.code}
              test={test}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
