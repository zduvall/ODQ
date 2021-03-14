// import component
import { Radio } from './QuestionTypes';

export default function SelectedDataPoint({ datapoint, date }) {
  const dpArray = [...Object.entries(JSON.parse(datapoint.res))];

  return (
    <div className='site__sub-section selected-data-point'>
      <h3 className='cntr-txt-sml-margin primary-title'>{date}</h3>
      <div className='selected-data-point__q-and-a'>
        {dpArray.map((dp) => {
          return <Radio key={dp.id} dp={dp} />;
        })}
      </div>
    </div>
  );
}
