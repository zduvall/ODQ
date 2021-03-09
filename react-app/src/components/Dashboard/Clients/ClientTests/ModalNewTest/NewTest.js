// import context
import { useClientsContext } from '../../index';

export default function NewTest() {
  const { clientToUpdate } = useClientsContext();

  return (
    <>
      <h1>Send test to {clientToUpdate.code}</h1>
    </>
  );
}
