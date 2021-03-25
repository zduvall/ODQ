import { useSelector } from 'react-redux';

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
  const sessionUser = useSelector((state) => state.session.user);

  function checkPremium() {
    const freeTests = ['ACE', 'SWLS'];
    if (!sessionUser.premium && !freeTests.includes(test.code)) {
      return false;
    }
    return true;
  }

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {checkPremium() && (
            <NewUrl newUrl={newUrl} client={client} test={test} />
          )}
          {!checkPremium() && <PremiumRequired />}
        </Modal>
      )}
    </>
  );
}
