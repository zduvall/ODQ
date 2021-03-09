// import component
import NewLink from './NewLink';

// import context
import { Modal } from '../../../../../context/Modal';

export default function ModalNewLink({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewLink setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
