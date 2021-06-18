export default function Billing({ subType, customer }) {
  const { brand, last4, expMonth, expYear } = customer || {}; // in case there isn't a customer attached yet.
  return (
    <p>
      <span className='underline'>Billing</span>:{' '}
      <span className='tertiary-text'>
        {subType ? (
          <>
            {brand.charAt(0).toUpperCase() + brand.slice(1)} (***{last4}, exp:{' '}
            {expMonth}/{expYear.toString().slice(2)})
          </>
        ) : (
          'none'
        )}
      </span>
    </p>
  );
}
