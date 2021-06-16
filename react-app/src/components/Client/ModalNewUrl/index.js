import { useSelector } from 'react-redux';

// import components
import NewUrl from './NewUrl';
import PremiumRequired from './PremiumRequired';

// import context
import { Modal } from '../../../context/Modal';

// import check subscription type function
import checkTestAndSubType from '../../../services/checkTestAndSubType';

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
          {checkTestAndSubType(test.code, subType) && (
            <NewUrl newUrl={newUrl} client={client} test={test} />
          )}
          {!checkTestAndSubType(test.code, subType) && (
            <PremiumRequired testAbbr={test.abbr} />
          )}
        </Modal>
      )}
    </>
  );
}
