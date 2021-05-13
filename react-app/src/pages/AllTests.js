import tests from '../assets/index';

export default function AllTests() {
  return (
    <div>
      <h1>All Tests</h1>
      {Object.values(tests).map((test) => (
        <>
          <details>
            <summary>{test.name}</summary>
            <p>{test.description}</p>
            <p>{test.interpretation}</p>
          </details>
        </>
      ))}
    </div>
  );
}
