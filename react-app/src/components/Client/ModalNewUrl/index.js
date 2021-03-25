import { useSelector } from 'react-redux';

// import components
import NewUrl from './NewUrl';
import PremiumRequired from './PremiumRequired';

// import context
import { Modal } from '../../../context/Modal';

// import check premium function
import checkPremium from '../../../services/checkPremium';

export default function ModalNewUrl({
  showModal,
  setShowModal,
  client,
  newUrl,
  test,
}) {
  const premium = useSelector((state) => state.session.user.premium);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {checkPremium(premium, test.code) && (
            <NewUrl newUrl={newUrl} client={client} test={test} />
          )}
          {!checkPremium(premium, test.code) && (
            <PremiumRequired testAbbr={test.abbr} />
          )}
        </Modal>
      )}
    </>
  );
}
