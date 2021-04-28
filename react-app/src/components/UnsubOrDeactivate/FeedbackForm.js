import { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState();
  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    console.log(feedback);
  }

  return (
    <div className='site__sub-section form-container'>
      <form className='form' onSubmit={onSubmit}>
        <div className='errors-container'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <textarea
          placeholder='Write feedback here'
          onChange={(e) => setFeedback(e.target.value)}
          className='form__input form__textarea'
        ></textarea>
        <div className='buttons-grp-colLrg-rowSml'>
          <button className='primary-button'>Submit</button>
          <button className='secondary-button'>Skip</button>
        </div>
      </form>
    </div>
  );
}
