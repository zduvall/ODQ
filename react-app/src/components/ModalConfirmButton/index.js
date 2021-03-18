// import component
import ModalConfirmButton from './ModalConfirmButton';

// import context
import { Modal } from '../../context/Modal';

export default function ModalNewUrl({ showModal, setShowModal, message }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ModalConfirmButton message={message} />
        </Modal>
      )}
    </>
  );
}
