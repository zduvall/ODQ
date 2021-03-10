export default function NewUrl({ client, newUrl }) {
  return (
    <>
      <h1>Send test to {client.code}</h1>
      <p>{newUrl}</p>
    </>
  );
}
