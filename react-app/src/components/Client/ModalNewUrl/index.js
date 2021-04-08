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
  const premium = useSelector((state) => state.session.user.subType);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {checkPremium(test.code, premium) && (
            <NewUrl newUrl={newUrl} client={client} test={test} />
          )}
          {!checkPremium(test.code, premium) && (
            <PremiumRequired testAbbr={test.abbr} />
          )}
        </Modal>
      )}
    </>
  );
}
