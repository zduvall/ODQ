import { useState } from 'react';

export default function BirthYearValidator({ setShowTest, clientId }) {
  const [year, setYear] = useState();
  const [wrongYear, setWrongYear] = useState(false);
  const [attempts, setAttempts] = useState(5);

  async function handleClick(e) {
    e.preventDefault();
    if (!year) {
      setWrongYear(true);
      setAttempts((prev) => prev - 1);
      return;
    }
    const res = await fetch(`/api/clients/check-year/${clientId}/${year}`);
    const validated = await res.json();
    if (validated) {
      setShowTest(true);
    } else {
      setAttempts((prev) => prev - 1);
      setWrongYear(true);
    }
  }

  return (
    <div className='site__sub-section birth-year-validator__container'>
      <h3 className='primary-title'>Please confirm your birth year</h3>
      <form className='form'>
        <div className='birth-year-validator__form__row'>
          <input
            className='form__input'
            type='number'
            placeholder='birth year'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            // min={1900}
            max={new Date().getFullYear()}
          ></input>
          <button
            type='submit'
            className='primary-button'
            onClick={handleClick}
            disabled={attempts <= 0}
          >
            Validate
          </button>
        </div>
      </form>
      {wrongYear && (
        <div className='errors-container'>
          <p className='birth-year-validator__error'>
            {`The year provided was invalid. ${attempts} attempts remaining. If you believe this is a mistake,
            please contact your provider.`}
          </p>
        </div>
      )}
    </div>
  );
}
