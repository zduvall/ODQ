import { useSelector } from 'react-redux';

// import components
import NewUrl from './NewUrl';
import PremiumRequired from './PremiumRequired';

// import context
import { Modal } from '../../../context/Modal';

// import check subscription type function
import checkSubType from '../../../services/checkSubType';

export default function ModalNewUrl({
  showModal,
  setShowModal,
  client,
  newUrl,
  test,
}) {
  const subType = useSelector((state) => state.session.user.subType);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {checkSubType(test.code, subType) && (
            <NewUrl newUrl={newUrl} client={client} test={test} />
          )}
          {!checkSubType(test.code, subType) && (
            <PremiumRequired testAbbr={test.abbr} />
          )}
        </Modal>
      )}
    </>
  );
}
