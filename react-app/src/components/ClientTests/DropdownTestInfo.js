import { useClientTestsContext } from './index';

export default function DropdownTestInfo() {
  const { dropdownTest, setDropdownTest } = useClientTestsContext();

  return (
    <div className='site__sub-section test-descriptions-container'>
      <h2 className='primary-title cntr-txt-sml-margin'>{dropdownTest.name}</h2>
      <h3 className='cntr-txt-sml-margin'>({dropdownTest.abbr})</h3>
      <div className='test-descriptions-text'>
        <p>
          <span className='underline'>Description</span>:{' '}
          {dropdownTest.description}
        </p>
        <p>
          <span className='underline'>Duration</span>: {dropdownTest.minMinutes}{' '}
          - {dropdownTest.maxMinutes} minutes
        </p>
        <p>
          <span className='underline'>More Information</span>:{' '}
          <span
            className='clickable-link'
            onClick={() => window.open(dropdownTest.link)}
          >
            {dropdownTest.link}
          </span>
        </p>
      </div>
      <button
        className='delete-button'
        onClick={() => setDropdownTest({ code: '' })}
      >
        Back
      </button>
    </div>
  );
}
