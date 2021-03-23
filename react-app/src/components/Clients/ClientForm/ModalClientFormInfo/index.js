// import component
import ModalClientFormInfo from './ModalClientFormInfo';

// import context
import { Modal } from '../../../../context/Modal';

export default function ClientFormInfo({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ModalClientFormInfo />
        </Modal>
      )}
    </>
  );
}
