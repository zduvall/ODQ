// component
import FeedbackForm from '../components/Feedback/FeedbackForm';

export default function Feedback() {
  return (
    <div className='site__page'>
      <h1 className='primary-title cntr-txt-sml-margin'>Feedback</h1>
      <h3 className='secondary-title cntr-txt-sml-margin'>
        What suggestions do you have for how eDOT can be improved?
      </h3>
      {/* <img
        className='goodbye-image'
        src={goodBye}
        alt={'Person exiting through door'}
        title={'Person exiting through door'}
      /> */}
      <div className='one1rem-ht' />
      <FeedbackForm type={'feedback'} />
    </div>
  );
}
