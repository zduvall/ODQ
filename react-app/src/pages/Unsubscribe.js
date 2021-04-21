import goodBye from '../components/Unsubscribe/images/leaving-through-door.svg';

export default function Unsubscribe() {
  return (
    <div className='site__page'>
      <img
        className='splash__secondary-image'
        src={goodBye}
        alt={'Man exiting through door'}
        title={'Man exiting through door'}
      />
      <div className='site__sub-section'></div>
    </div>
  );
}
