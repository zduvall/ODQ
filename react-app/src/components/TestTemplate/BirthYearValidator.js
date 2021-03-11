import { useState } from 'react';

export default function BirthYearValidator({ setShowTest, clientId }) {
  const [year, setYear] = useState();

  async function handleClick(e) {
    e.preventDefault();
    const res = await fetch(`/api/clients/check-year/${clientId}/${year}`);
    const validated = await res.json();
    if (validated) setShowTest(true);
  }

  return (
    <div className='site__sub-section'>
      <p>Please confirm your birth year</p>
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
    </div>
  );
}
