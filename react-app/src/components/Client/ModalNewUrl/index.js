import { useSelector } from 'react-redux';

// import components
import NewUrl from './NewUrl';
import PremiumRequired from './PremiumRequired';

// import context
import { Modal } from '../../../context/Modal';

// import check subscription type function
import checkTestSubTypeAndStatus from '../../../services/checkTestSubTypeAndStatus';

export default function ModalNewUrl({
  showModal,
  setShowModal,
  client,
  newUrl,
  test,
}) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {checkTestSubTypeAndStatus(test.code, sessionUser) && (
            <NewUrl newUrl={newUrl} client={client} test={test} />
          )}
          {!checkTestSubTypeAndStatus(test.code, sessionUser) && (
            <PremiumRequired testAbbr={test.abbr} />
          )}
        </Modal>
      )}
    </>
  );
}
