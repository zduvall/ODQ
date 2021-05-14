// import free tests
import { freeTests } from '../../assets';

// import components
import TestInfo from './TestInfo';
import PremiumBadge from '../PremiumBadge';

export default function TestDetailsElement({ test, handleClick }) {
  return (
    <details key={test.code} className='test-details' onClick={handleClick}>
      <summary className='test-summary'>
        {test.abbr}{' '}
        {!freeTests.includes(test.code) ? (
          <>
            <PremiumBadge />{' '}
          </>
        ) : (
          ''
        )}
        <span className='tertiary-text'>({test.target})</span>
      </summary>
      <div className='test-info'>
        <TestInfo test={test} />
      </div>
    </details>
  );
}
