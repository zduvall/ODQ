import { useHistory } from 'react-router-dom';

export default function PremiumRequired({ testAbbr }) {
  const history = useHistory();
  return (
    <>
      <h2 className='cntr-txt-sml-margin primary-title'>
        Premium Test <i class='fas fa-medal'></i>
      </h2>
      <p>
        The {`${testAbbr}`} other tests are available to premium users.
        Please consider our{' '}
        <span
          className='clickable-link'
          onClick={() => history.push('/profile')}
        >
          monthly subscription
        </span>{' '}
        for $5 per month.
      </p>
    </>
  );
}
