import './splashPage.css';
import womanInTherapy from './woman-in-therapy.jpg';

export default function SplashPage() {
  return (
    <div className='splash'>
      <h1 className='primary-title'>Diagnostic and Outcome Testing</h1>
      <h2 className='secondary-title'>
        for therapists and other helping professionals
      </h2>
      <img
        className='splash__primary-image'
        src={womanInTherapy}
        title='Designed by pch.vector / Freepik'
        alt='woman in therapy, vector created by pch.vector - https://www.freepik.com/vectors/people'
      />
    </div>
  );
}
