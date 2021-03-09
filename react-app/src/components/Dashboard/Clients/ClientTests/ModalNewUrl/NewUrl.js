// import context
import { useClientsContext } from '../../index';

export default function NewUrl({ newUrl }) {
  const { clientToUpdate } = useClientsContext();

  return (
    <>
      <h1>Send test to {clientToUpdate.code}</h1>
      <p>{newUrl}</p>
    </>
  );
}
