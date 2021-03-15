//import context
import { useClientTestsContext } from '../index';

// import component
import Section from './QuestionTypes';

export default function SelectedDataPoint({ datapoint, date }) {
  const { selectedTest } = useClientTestsContext();

  // array of datapoints
  // const dpArray = [...Object.entries(JSON.parse(datapoint.res))];
  const resObj = JSON.parse(datapoint.res);

  return (
    <div className='site__sub-section selected-data-point'>
      <h3 className='cntr-txt-sml-margin primary-title'>{date}</h3>
      <div className='selected-data-point__q-and-a'>
        {selectedTest.sections.map((section) => {
          return <Section key={section.id} section={section} resObj={resObj} />;
        })}
      </div>
    </div>
  );
}
