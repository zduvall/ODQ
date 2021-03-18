import './ModalConfirmButton.css'

export default function ModalConfirmButton({
  setShowModal,
  proceedAction,
  message,
}) {
  function handleProceed() {
    proceedAction();
  }

  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>{message}</h2>
      <div className='dashboard__buttons confirm-buttons'>
        <button
          className='primary-button'
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </button>
        <button className='delete-button' onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </>
  );
}
