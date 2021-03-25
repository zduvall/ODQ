// import components
import NewUrl from './NewUrl';
import PremiumRequired from './PremiumRequired';

// import context
import { Modal } from '../../../context/Modal';

export default function ModalNewUrl({
  showModal,
  setShowModal,
  client,
  newUrl,
  test,
}) {
  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewUrl newUrl={newUrl} client={client} test={test} />
        </Modal>
      )}
    </>
  );
}
