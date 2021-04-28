import { useLocation } from 'react-router-dom';

// component
import FeedbackForm from '../components/UnsubOrDeactivate/FeedbackForm';

// image
import goodBye from '../components/UnsubOrDeactivate/images/leaving-through-door.svg';

// css
import '../components/UnsubOrDeactivate/UnsubOrDeactivate.css';

export default function Unsubscribe() {
  const { pathname } = useLocation();

  const infoFromPath = {
    '/unsubscribe': {
      title: 'Sorry to see you unsubscribe!',
      feedback: 'Please take a moment to share why you usubscribed.',
    },
    '/deactivate': {
      title: 'Sorry to see you go!',
      feedback:
        'Please take a moment to share why you are deactivating your account.',
    },
  };

  return (
    <div className='site__page'>
      <h1 className='primary-title'>{infoFromPath[pathname].title}</h1>
      <img
        className='goodbye-image'
        src={goodBye}
        alt={'Person exiting through door'}
        title={'Person exiting through door'}
      />
      <div className='one1rem-ht' />
      <h3 className='secondary-title'>{infoFromPath[pathname].feedback}</h3>
      <FeedbackForm type={pathname.slice(1)} />
    </div>
  );
}
