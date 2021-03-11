export default function NewUrl({ client, newUrl, test }) {
  return (
    <div>
      <h2>
        {test.abbr} link for {client.code}
      </h2>
      <p>{newUrl}</p>
    </div>
  );
}
