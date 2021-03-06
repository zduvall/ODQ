export default function ClientRow({ client }) {
  return (
    <>
      <p>{client.code}</p>
      <p>{client.birthYear}</p>
      <p>{client.curClient ? 'Active' : 'Terminated'}</p>
    </>
  );
}
