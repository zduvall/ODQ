export default function BirthYearValidator({ setShowTest }) {
  return (
    <div className='site__sub-section'>
      <p>Birth Year Validator</p>
      <button className='primary-button' onClick={() => setShowTest(true)}>
        Validate
      </button>
    </div>
  );
}
