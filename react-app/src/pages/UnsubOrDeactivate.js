import goodBye from '../components/Unsubscribe/images/leaving-through-door.svg';

export default function Unsubscribe() {
  return (
    <div className='site__page'>
      <h1 className='primary-title'>Sorry to see you go!</h1>
      <div className='site__sub-section'></div>
      <div className='one1rem-ht' />
      <img
        className='splash__secondary-image'
        src={goodBye}
        alt={'Man exiting through door'}
        title={'Man exiting through door'}
      />
    </div>
  );
}
