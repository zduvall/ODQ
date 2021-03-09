export default function TestHeader({ test }) {
  return (
    <>
      <h1>{test.abbr}</h1>
      <p>{test.instructions}</p>
    </>
  );
}
