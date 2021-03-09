// import component
import NewTest from './NewTest';

// import context
import { Modal } from '../../../../../context/Modal';

export default function ModalNewTest({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewTest setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
