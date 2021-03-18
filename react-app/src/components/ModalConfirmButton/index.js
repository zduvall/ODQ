// import component
import ModalConfirmButton from './ModalConfirmButton';

// import context
import { Modal } from '../../context/Modal';

export default function ModalNewUrl({
  showModal,
  setShowModal,
  proceedAction,
  message,
}) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ModalConfirmButton
            setShowModal={setShowModal}
            proceedAction={proceedAction}
            message={message}
          />
        </Modal>
      )}
    </>
  );
}
