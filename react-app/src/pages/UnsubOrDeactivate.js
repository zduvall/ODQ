import { useLocation } from 'react-router-dom';

import goodBye from '../components/UnsubOrDeactivate/images/leaving-through-door.svg';

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
      <h2 className='secondary-title'>{infoFromPath[pathname].feedback}</h2>
      <div className='site__sub-section'></div>
      <div className='one1rem-ht' />
      <img
        className='splash__secondary-image'
        src={goodBye}
        alt={'Man exiting through door'}
        title={'Man exiting through door'}
      />
      <div className='one1rem-ht' />
    </div>
  );
}
