// import component
import ModalInfoButton from './ModalInfoButton';

// import context
import { Modal } from '../../context/Modal';

export default function ModalNewUrl({
  showModal,
  setShowModal,
  title,
  message,
}) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ModalInfoButton title={title} message={message} />
        </Modal>
      )}
    </>
  );
}
