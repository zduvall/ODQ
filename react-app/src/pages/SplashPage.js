// import components
import SplashPageSection from '../components/SplashPage/SplashPageSection';

// import style and images
import '../components/SplashPage/SplashPage.css';
import womanInTherapy from '../components/SplashPage/images/0_woman-in-therapy.webp';
import takingNotes from '../components/SplashPage/images/1_taking_notes.svg';
import mobileUser from '../components/SplashPage/images/2_mobile_user.svg';
import vistualData from '../components/SplashPage/images/3_visual_data.webp';

export default function SplashPage() {
  return (
    <div className='splash'>
      <div>
        <h1 className='electronic'>electronic</h1>
        <h1 className='primary-title d-and-o-t'>
          Diagnostic & Outcome Testing
        </h1>
        <h2 className='tertiary-title'>
          for therapists & other helping professionals
        </h2>
        <img
          className='splash__primary-image'
          src={womanInTherapy}
          title='Woman meeting with a therapist'
          alt='Woman meeting with a therapist'
        />
      </div>
      <SplashPageSection
        image={takingNotes}
        alt={'Creating digital tests'}
        desc={
          'Choose from our database of online tests for clients & therapists'
        }
        backwards={false}
      />
      <SplashPageSection
        image={mobileUser}
        alt={'Completing test on phone'}
        desc={'Complete the tests at a convenient time & place on any screen'}
        backwards={true}
      />
      <SplashPageSection
        image={vistualData}
        alt={'Visualing results on graph'}
        desc={'View results & progress in convenient summaries & graphs'}
        backwards={false}
      />
    </div>
  );
}
