// import components
import SplashPageSection from './SplashPageSection';

// import style and images
import './splashPage.css';
import womanInTherapy from './images/woman-in-therapy.jpg';
import takingNotes from './images/1_taking_notes.svg';
import mobileUser from './images/2_mobile_user.svg';
import vistualData from './images/DOT_3_visual_data.png';

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
      <SplashPageSection
        image={takingNotes}
        alt={'Therapist taking notes'}
        desc={'Choose from our database to create online tests for clients'}
        backwards={false}
      />
      <SplashPageSection
        image={mobileUser}
        alt={'Completing test on phone'}
        desc={
          'You or clients can complete the test at a convenient time and place'
        }
        backwards={true}
      />
      <SplashPageSection
        image={vistualData}
        alt={'Visualing test results on graph'}
        desc={'See test results in convenient graphs and summaries'}
        backwards={false}
      />
    </div>
  );
}
