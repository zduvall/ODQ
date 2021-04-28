import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FeedbackForm({ type }) {
  const sessionUser = useSelector((state) => state.session.user);

  const [feedback, setFeedback] = useState();
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const date = new Date();
    const readableDate = date.toLocaleString('en-us', {
      timeZone: 'America/Denver',
    });

    const data = {
      name: `${sessionUser.firstName} ${sessionUser.lastName}`,
      email: sessionUser.email,
      type,
      feedback: feedback,
      sent: readableDate,
    };
    console.log(data);

    await fetch(
      'https://sheet.best/api/sheets/8e811641-935d-4f71-8958-0cf7bddab246',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
  }

  return (
    <div className='site__sub-section form-container'>
      <form className='form' onSubmit={onSubmit}>
        <div className='errors-container'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div className='site__sub-section__data'>
          <div className='form__row'>
            <textarea
              placeholder='Share feedback here.'
              onChange={(e) => setFeedback(e.target.value)}
              className='form__input form__textarea'
            ></textarea>
          </div>
        </div>
        <div className='buttons-grp-colLrg-rowSml'>
          <button className='primary-button'>Submit</button>
          <button className='secondary-button'>Skip</button>
        </div>
      </form>
    </div>
  );
}
