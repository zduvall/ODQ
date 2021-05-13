//import component
import TestInfo from '../AllTests/TestInfo';

// import context
import { useClientTestsContext } from '../../pages/Client';

// import css
import './Client.css';

export default function DropdownTestInfo() {
  const { dropdownTest, setDropdownTest } = useClientTestsContext();

  return (
    <div className='site__sub-section flex-dir-col'>
      <i
        className='fas fa-times top-right-grey'
        onClick={() => setDropdownTest({ code: '' })}
      ></i>
      <TestInfo test={dropdownTest} />
    </div>
  );
}
