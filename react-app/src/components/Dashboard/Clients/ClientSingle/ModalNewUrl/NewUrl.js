// import context
import { useClientsContext } from '../../index';

export default function NewUrl({ newUrl }) {
  const { selectedClient } = useClientsContext();

  return (
    <>
      <h1>Send test to {selectedClient.code}</h1>
      <p>{newUrl}</p>
    </>
  );
}
