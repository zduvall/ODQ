import './splashPage.css';
import womanInTherapy from './images/woman-in-therapy.jpg';
import takingNotes from './images/1_taking_notes.svg';
import mobileUser from './images/2_mobile_user.svg'
import vistualData from './images/DOT_3_visual_data.png'

export default function SplashPage() {
  return (
    <div className='splash'>
      <div>
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
      <div className='splash__secondary-content'>
        <img
          className='splash__secondary-image'
          src={takingNotes}
          alt='Therapist taking notes'
        />
        <h2 className='tertiary-title splash__secondary-text'>
          Choose from our database to create online tests for clients
        </h2>
      </div>
      <div className='splash__secondary-content splash__secondary-content-backwards'>
        <img
          className='splash__secondary-image'
          src={mobileUser}
          alt='Completing test on phone'
        />
        <h2 className='tertiary-title splash__secondary-text'>
          You or clients can complete the test at a convenient time and place
        </h2>
      </div>
      <div className='splash__secondary-content'>
        <img
          className='splash__secondary-image'
          src={vistualData}
          alt='Visualing test results on graph'
        />
        <h2 className='tertiary-title splash__secondary-text'>
          See test results in convenient graphs and summaries
        </h2>
      </div>
    </div>
  );
}
