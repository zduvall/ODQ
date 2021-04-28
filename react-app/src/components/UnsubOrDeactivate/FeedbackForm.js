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
      <h1>Feedback Form</h1>
      <form className='form' onSubmit={onSubmit}>
        <div className='errors-container'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <textarea
          placeholder='Write feedback here'
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button className='primary-button'>Submit</button>
        <button className='primary-button'>Skip</button>
      </form>
    </div>
  );
}
