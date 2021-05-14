// import component
import PremiumBadge from '../PremiumBadge';
import TestInfoParagraph from './TestInfoParagraph';

// import free tests
import { freeTests } from '../../assets';

export default function TestInfo({ test }) {
  const {
    minMinutes,
    maxMinutes,
    selfAdmin,
    name,
    code,
    abbr,
    description,
    score,
    interpretation,
    attribution,
    link,
  } = test;

  const completion = `${minMinutes} - ${maxMinutes} minutes, ${
    selfAdmin ? 'self-administered' : 'taken by professional'
  }`;

  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>
        {name} {!freeTests.includes(code) && <PremiumBadge />}
      </h2>
      <h3 className='tertiary-title cntr-txt-sml-margin'>({abbr})</h3>
      <div className='test-descriptions-text'>
        <TestInfoParagraph label='Description' content={description} />
        <TestInfoParagraph label='Scoring' content={score} />
        <TestInfoParagraph label='Interpretation' content={interpretation} />
        <TestInfoParagraph label='Completion' content={completion} />
        <TestInfoParagraph label='Attribution' content={attribution} />
        <p className='clickable-link' onClick={() => window.open(link)}>
          More Information
        </p>
      </div>
    </>
  );
}
