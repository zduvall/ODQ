import './ModalConfirmButton.css';

export default function ModalConfirmButton({
  setShowModal,
  proceedAction,
  message,
}) {
  function handleProceed() {
    proceedAction();
    setShowModal(false);
  }

  return (
    <>
      <h3 className='primary-title cntr-txt-sml-margin'>{message}</h3>
      <div className='buttons-grp-colLrg-rowSml confirm-buttons'>
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
