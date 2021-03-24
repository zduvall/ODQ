// import components
import CompletedTests from './CompletedTests';
import TestDropDownNewUrl from './TestDropDownNewUrl';

export default function ClientControls() {
  return (
    <div className='site__sub-section client-controls'>
      <div className='flex-dir-col width-100'>
        <CompletedTests />
      </div>
      <div className='flex-dir-col width-100'>
        <TestDropDownNewUrl />
      </div>
    </div>
  );
}
