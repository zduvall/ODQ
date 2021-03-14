import { useClientTestsContext } from './index';

export default function DropdownTestInfo() {
  const { dropdownTest, setDropdownTest } = useClientTestsContext();

  return (
    <div className='site__sub-section'>
      <h1 className='primary-title'>Test Info</h1>
      <button
        className='delete-button'
        onClick={() => setDropdownTest({ code: '' })}
      >
        Back
      </button>
    </div>
  );
}
