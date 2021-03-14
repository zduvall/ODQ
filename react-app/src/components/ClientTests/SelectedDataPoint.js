export default function SelectedDataPoint({ datapoint, date }) {
  
  return (
    <div className='site__sub-section'>
      <h2>{date}</h2>
      {/* <h2>{new Date(datapoint.timeComp)}</h2> */}
    </div>
  );
}
