// import component
import PremiumBadge from '../PremiumBadge';

// import free tests
import { freeTests } from '../../assets';

export default function TestInfo({ test }) {
  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>
        {test.name} {!freeTests.includes(test.code) && <PremiumBadge />}
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
