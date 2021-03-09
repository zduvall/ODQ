// import component
import NewUrl from './NewUrl';

// import context
import { Modal } from '../../../../../context/Modal';

export default function ModalNewUrl({ showModal, setShowModal, newUrl }) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewUrl newUrl={newUrl} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}
