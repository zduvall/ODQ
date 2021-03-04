// import components
import SplashPageSection from './SplashPageSection';

// import style and images
import './splashPage.css';
import womanInTherapy from './images/woman-in-therapy.jpg';
import takingNotes from './images/1_taking_notes.svg';
import mobileUser from './images/2_mobile_user.svg';
import vistualData from './images/3_visual_data.png';

export default function SplashPage() {
  return (
    <div className='splash'>
      <div>
        <h1 className='primary-title'>Diagnostic and Outcome Testing</h1>
        <h2 className='tertiary-title'>
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
        alt={'Creating digital tests'}
        desc={'Choose from our database of online tests for clients and therapists'}
        backwards={false}
      />
      <SplashPageSection
        image={mobileUser}
        alt={'Completing test on phone'}
        desc={
          'Complete the tests at a convenient time and place on any screen'
        }
        backwards={true}
      />
      <SplashPageSection
        image={vistualData}
        alt={'Visualing results on graph'}
        desc={'View results and progress in convenient summaries and graphs'}
        backwards={false}
      />
    </div>
  );
}
