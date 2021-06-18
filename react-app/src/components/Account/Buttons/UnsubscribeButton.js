export default function UnsubscribeButton({ setShowUnsubscribeModal }) {
  return (
    <button
      className='delete-button dashboard__button'
      onClick={() => setShowUnsubscribeModal(true)}
    >
      Unsubscribe
    </button>
  );
}
