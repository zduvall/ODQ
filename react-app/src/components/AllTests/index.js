export default function SingleTestDetails({ test }) {
  return (
    <>
      <details>
        <summary>{test.abbr}</summary>
        <p>{test.name}</p>
        <p>{test.description}</p>
        <p>{test.interpretation}</p>
      </details>
    </>
  );
}
