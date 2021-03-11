import { useState } from 'react';

export default function BirthYearValidator({ setShowTest, clientId }) {
  const [year, setYear] = useState('');
  const [wrongYear, setWrongYear] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    const res = await fetch(`/api/clients/check-year/${clientId}/${year}`);
    const validated = await res.json();
    if (validated) setShowTest(true);
    else setWrongYear(true);
  }

  return (
    <div className='site__sub-section birth-year-validator__container'>
      <h3 className='primary-title'>Please confirm your birth year</h3>
      <form className='form'>
        <input
          className='form__input'
          type='number'
          placeholder='birth year'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        ></input>
        <button type='submit' className='primary-button' onClick={handleClick}>
          Validate
        </button>
      </form>
      {wrongYear && (
        <div className='errors-container'>
          <p>
            Invalid year entered. If you believe there is a mistake, please
            contact your provider.
          </p>
        </div>
      )}
    </div>
  );
}
