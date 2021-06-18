export default function NextPayment({ nextBillDate }) {
  return (
    <p>
      <span className='underline'>Next Payment</span>:{' '}
      <span className='tertiary-text'>
        $3.99 on {new Date(nextBillDate).toLocaleDateString()}
      </span>
    </p>
  );
}
