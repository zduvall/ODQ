export default function Billing({ subType, brand, last4, expMonth, expYear }) {
  console.log({ brand, last4, expMonth, expYear });
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
