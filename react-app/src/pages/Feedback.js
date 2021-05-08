import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

// component
import FeedbackForm from '../components/Feedback/FeedbackForm';

// images
import goodByeImg from '../components/Feedback/images/leaving-through-door.svg';
import feedbackImg from '../components/Feedback/images/undraw_Redesign_feedback.svg';
import LeaveThroughDoorSVG from '../components/Feedback/images/LeaveThroughDoorSVG';
import GeneralFeedbackSVG from '../components/Feedback/images/GeneralFeedbackSVG';

// css
import '../components/Feedback/Feedback.css';

export default function Unsubscribe() {
  const history = useHistory();
  const { pathname } = useLocation();

  // if they get to '/unsubscribe' and aren't a subscribing user, go back
  const sessionUser = useSelector((state) => state.session.user);
  if (pathname === '/unsubscribe' && !sessionUser.subType) {
    history.goBack();
  }

  const infoFromPath = {
    '/unsubscribe': {
      title: 'Sorry to see you unsubscribe!',
      prompt: 'Lastly, please take a moment to share why you are usubscribing.',
    },
    '/deactivate': {
      title: 'Sorry to see you go!',
      prompt:
        'Lastly, please take a moment to share why you are deactivating your account.',
    },
    '/feedback': {
      title: 'Feedback',
      prompt: 'What suggestions do you have for how eDOT can be improved?',
    },
  };

  return (
    <div className='site__page'>
      <h1 className='primary-title cntr-txt-sml-margin'>
        {infoFromPath[pathname].title}
      </h1>
      <h3 className='secondary-title cntr-txt-sml-margin'>
        {infoFromPath[pathname].prompt}
      </h3>
      <FeedbackForm type={pathname.slice(1)} />
      <div className='one1rem-ht' />
      <div className='site__sub-section'>
        {pathname !== '/feedback' && <LeaveThroughDoorSVG />}
        {pathname === '/feedback' && <GeneralFeedbackSVG />}
      </div>
    </div>
  );
}
