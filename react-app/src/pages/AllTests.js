// import test objects and array of premium tests
import tests from '../assets/index';

// import component
import SingleTestDetails from '../components/AllTests';

// import css
import '../components/AllTests/AllTests.css'

export default function AllTests() {
  return (
    <div className='site__page'>
      <h1 className='primary-title'>Available Tests</h1>
      <div className='site__sub-section'>
        {Object.values(tests).map((test) => (
          <SingleTestDetails test={test} />
        ))}
      </div>
    </div>
  );
}
