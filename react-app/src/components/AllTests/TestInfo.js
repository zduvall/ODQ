import { useSelector } from 'react-redux';

// import check subscription type function
import checkSubType from '../../services/checkSubType';

// import free tests
import { freeTests } from '../../assets';

export default function DropdownTestInfo({ test }) {
  const subType = useSelector((state) => state.session.user?.subType) || 0;

  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>
        {test.name}{' '}
        {!freeTests.includes(test.code) && (
          <i
            title={
              checkSubType(test.code, subType)
                ? 'As a s subscribing user, you have access to premium tests.'
                : 'Subscribing users have access to premium tests'
            }
            className='fas fa-medal medal-w-title'
          ></i>
        )}
      </h2>
      <h3 className='tertiary-title cntr-txt-sml-margin'>({test.abbr})</h3>
      <div className='test-descriptions-text'>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Description</span>:{' '}
          {test.description}
        </p>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Scoring</span>: {test.score}
        </p>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Interpretation</span>:{' '}
          {test.interpretation}
        </p>
        <p>
          <span className='underline bold'>Completion</span>: {test.minMinutes}{' '}
          - {test.maxMinutes} minutes,{' '}
          {test.selfAdmin ? 'self-administered' : 'taken by professional'}
        </p>
        <p className='new-line-on-slash-n'>
          <span className='underline bold'>Attribution</span>:{' '}
          {test.attribution}
        </p>
        <p className='clickable-link' onClick={() => window.open(test.link)}>
          More Information
        </p>
      </div>
    </>
  );
}
