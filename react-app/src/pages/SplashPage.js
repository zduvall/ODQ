// import components
import SplashPageSection from '../components/SplashPage/SplashPageSection';

// import style and images
import '../components/SplashPage/SplashPage.css';
import WomanInTherapy from '../components/SplashPage/images/0_woman_in_therapy.js';
import TakingNotes from '../components/SplashPage/images/1_taking_notes.js';
import MobileUser from '../components/SplashPage/images/2_mobile_user.js';
import VistualData from '../components/SplashPage/images/3_visual_data.js';

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
        <div className='one1rem-ht'/>
        <WomanInTherapy />
        <div className='one1rem-ht'/>
      </div>
      <SplashPageSection
        image={<TakingNotes />}
        desc={
          'Choose from our database of online tests for clients & therapists'
        }
        backwards={false}
      />
      <SplashPageSection
        image={<MobileUser />}
        desc={'Complete the tests at a convenient time & place on any screen'}
        backwards={true}
      />
      <SplashPageSection
        image={<VistualData />}
        desc={'View results & progress in convenient summaries & graphs'}
        backwards={false}
      />
    </div>
  );
}
