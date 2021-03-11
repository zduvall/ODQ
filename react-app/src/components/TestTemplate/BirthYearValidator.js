import { useState } from 'react';

export default function BirthYearValidator({ setShowTest, clientId }) {
  const [year, setYear] = useState();

  async function handleClick() {
    const validated = await fetch(`/api/clients/check-year/${clientId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: year,
    });
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
        <button className='primary-button' onClick={() => setShowTest(true)}>
          Validate
        </button>
      </form>
    </div>
  );
}
