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
      <h3 className='primary-title cntr-txt-sml-margin'>{message}</h3>
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
