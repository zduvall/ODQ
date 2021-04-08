import { useSelector } from 'react-redux';

// import context
import { useClientTestsContext } from '../../pages/Client';

// import check subscription type function
import checkSubType from '../../services/checkSubType';

// import css
import './Client.css';

export default function DropdownTestInfo() {
  const subType = useSelector((state) => state.session.user.subType);

  const { dropdownTest, setDropdownTest } = useClientTestsContext();

  return (
    <div className='site__sub-section flex-dir-col'>
      <i
        className='fas fa-times top-right-grey'
        onClick={() => setDropdownTest({ code: '' })}
      ></i>
      <h2 className='primary-title cntr-txt-sml-margin'>
        {dropdownTest.name}{' '}
        {checkSubType(subType) ? (
          ''
        ) : (
          <i
            title={'Subscribing users have access to premium tests'}
            className='fas fa-medal medal-w-title'
          ></i>
        )}
      </h2>
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
    </div>
  );
}
