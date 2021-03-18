import { useState } from 'react';
import { useDispatch } from 'react-redux';

//import context
import { useClientTestsContext } from '../index';

// import component
import Section from './SectionAndQuestionTypes';
import ModalConfirmButton from '../../ModalConfirmButton';

// import thunk
import { deleteTest } from '../../../store/tests';

export default function SelectedDataPoint() {
  const dispatch = useDispatch();
  const { selectedTest, setDatapoint, datapoint } = useClientTestsContext();

  const [showModal, setShowModal] = useState(false);

  const resObj = JSON.parse(datapoint.res);

  async function handleDelete() {
    await dispatch(deleteTest(datapoint.id));
    setDatapoint(false);
    window.scrollBy(0, -1); // this makes it so the screen doesn't snap down to the bottom (where it was when you clicked delete) the next time you click a datapoint
  }

  return (
    <div className='site__sub-section selected-data-point'>
      <ModalConfirmButton
        showModal={showModal}
        setShowModal={setShowModal}
        proceedAction={handleDelete}
        message={`Are you sure you want to delete this test result from ${new Date(
          datapoint.timeComp
        ).toLocaleDateString()}? You should only do this if there is an error in the client response.`}
      />
      <h3 className='cntr-txt-sml-margin primary-title'>
        {new Date(datapoint.timeComp).toLocaleDateString()}
      </h3>
      <div className='selected-data-point__details'>
        {selectedTest.sections.map((section) => {
          return <Section key={section.id} section={section} resObj={resObj} />;
        })}
      </div>
      <button onClick={() => setShowModal(true)} className='delete-button'>
        Delete
      </button>
    </div>
  );
}
