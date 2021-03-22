export default function TestHeader({ test }) {
  return (
    <>
      <h1 className='primary-title'>{test.abbr}</h1>
      <p>{test.instructions}</p>
    </>
  );
}
