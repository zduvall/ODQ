import { useHistory } from 'react-router-dom';

export default function PremiumRequired({ testAbbr }) {
  const history = useHistory();
  return (
    <>
      <h2 className='cntr-txt-sml-margin primary-title'>
        Premium Test{' '}
        <i
          className='fas fa-medal medal-w-title'
          title={'Subscribing users have access to premium tests'}
        ></i>
      </h2>
      <p>
        The {`${testAbbr}`} and other tests are available to premium users. Please
        consider our{' '}
        <span
          className='clickable-link'
          onClick={() => history.push('/payments/1')}
        >
          monthly subscription
        </span>{' '}
        for $3.99 per month.
      </p>
    </>
  );
}
