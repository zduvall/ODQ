export default function Type(subType) {
  return (
    <p>
      <span className='underline bold'>Type</span>:{' '}
      <span className='primary-text'>
        {!!subType ? (
          <>
            Premium Subscription{' '}
            <i
              title={
                'Premium test. As a subscribing user, you have access to all tests.'
              }
              className='fas fa-medal medal-w-title primary-title'
            ></i>
          </>
        ) : (
          'Free Account'
        )}
      </span>
    </p>
  );
}
