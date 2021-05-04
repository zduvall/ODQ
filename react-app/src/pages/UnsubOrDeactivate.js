import { useLocation } from 'react-router-dom';

// component
import FeedbackForm from '../components/Feedback/FeedbackForm';

// image
import goodBye from '../components/Feedback/images/leaving-through-door.svg';

// css
import '../components/Feedback/UnsubOrDeactivate.css';

export default function Unsubscribe() {
  const { pathname } = useLocation();

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
  };

  return (
    <div className='site__page'>
      <h1 className='primary-title cntr-txt-sml-margin'>
        {infoFromPath[pathname].title}
      </h1>
      <h3 className='secondary-title cntr-txt-sml-margin'>
        {infoFromPath[pathname].prompt}
      </h3>
      <img
        className='goodbye-image'
        src={goodBye}
        alt={'Person exiting through door'}
        title={'Person exiting through door'}
      />
      <div className='one1rem-ht' />
      <FeedbackForm type={pathname.slice(1)} />
    </div>
  );
}
