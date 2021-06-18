export default function Access(subType) {
  return (
    <p>
      <span className='underline'>Access</span>:{' '}
      <span className='tertiary-text'>
        {!!subType
          ? 'all tests in eDOT database.'
          : 'free tests in eDOT database'}
      </span>
    </p>
  );
}
