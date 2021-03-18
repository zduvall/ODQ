import { useDispatch } from 'react-redux';

//import context
import { useClientTestsContext } from '../index';

// import component
import Section from './SectionAndQuestionTypes';

// import thunk
import { deleteTest } from '../../../store/tests';

export default function SelectedDataPoint() {
  const dispatch = useDispatch();
  const { selectedTest, setDatapoint, datapoint } = useClientTestsContext();

  const resObj = JSON.parse(datapoint.res);

  async function handleDelete() {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      await dispatch(deleteTest(datapoint.id));
      setDatapoint(false);
    }
  }

  console.log(datapoint);

  return (
    <div className='site__sub-section selected-data-point'>
      <h3 className='cntr-txt-sml-margin primary-title'>
        {new Date(datapoint.timeComp).toLocaleDateString()}
      </h3>
      <div className='selected-data-point__details'>
        {selectedTest.sections.map((section) => {
          return <Section key={section.id} section={section} resObj={resObj} />;
        })}
      </div>
      <button onClick={handleDelete} className='delete-button'>
        Delete
      </button>
    </div>
  );
}
