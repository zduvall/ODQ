// import components
// import SplashPageSection from '../components/SplashPage/SplashPageSection';
import SplashPageSection2 from '../components/SplashPage/SplashPageSection2';

// import style and images
import '../components/SplashPage/SplashPage.css';
import womanInTherapySVG from '../components/SplashPage/images/0_woman_in_therapy.svg';
import TakingNotes1 from '../components/SplashPage/images/1_taking_notes.js';
import MobileUser1 from '../components/SplashPage/images/2_mobile_user.js';
import VistualData1 from '../components/SplashPage/images/3_visual_data.js';
// import takingNotes from '../components/SplashPage/images/1_taking_notes.svg';
// import mobileUser from '../components/SplashPage/images/2_mobile_user.svg';
// import vistualData from '../components/SplashPage/images/3_visual_data.svg';

export default function SplashPage() {
  return (
    <div className='splash'>
      <div className='splash_top-section'>
        <h1 className='electronic'>electronic</h1>
        <h1 className='primary-title d-and-o-t'>
          Diagnostic & Outcome Testing
        </h1>
        <h2 className='tertiary-title'>
          for therapists & other helping professionals
        </h2>
        <img
          className='splash__primary-image'
          src={womanInTherapySVG}
          title='Woman meeting with a therapist'
          alt='Woman meeting with a therapist'
        />
      </div>
      {/* <SplashPageSection
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
      /> */}
      <SplashPageSection2
        image={<TakingNotes1 />}
        desc={
          'Choose from our database of online tests for clients & therapists'
        }
        backwards={false}
      />
      <SplashPageSection2
        image={<MobileUser1 />}
        desc={'Complete the tests at a convenient time & place on any screen'}
        backwards={true}
      />
      <SplashPageSection2
        image={<VistualData1 />}
        desc={'View results & progress in convenient summaries & graphs'}
        backwards={false}
      />
    </div>
  );
}
