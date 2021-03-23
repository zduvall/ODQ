import { useClientTestsContext } from '../../pages/Client';

export default function DropdownTestInfo() {
  const { dropdownTest, setDropdownTest } = useClientTestsContext();

  return (
    <div className='site__sub-section test-descriptions-container'>
      <h2 className='primary-title cntr-txt-sml-margin'>{dropdownTest.name}</h2>
      <h3 className='tertiary-title cntr-txt-sml-margin'>
        ({dropdownTest.abbr})
      </h3>
      <div className='test-descriptions-text'>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Description</span>:{' '}
          {dropdownTest.description}
        </p>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Scoring</span>: {dropdownTest.score}
        </p>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Interpretation</span>:{' '}
          {dropdownTest.interpretation}
        </p>
        <p>
          <span className='underline bold'>Completion</span>:{' '}
          {dropdownTest.minMinutes} - {dropdownTest.maxMinutes} minutes,{' '}
          {dropdownTest.selfAdmin
            ? 'self-administered'
            : 'taken by professional'}
        </p>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Attribution</span>:{' '}
          {dropdownTest.attribution}
        </p>
        <p
          className='clickable-link'
          onClick={() => window.open(dropdownTest.link)}
        >
          More Information
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
