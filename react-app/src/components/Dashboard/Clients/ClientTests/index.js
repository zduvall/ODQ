import { useClientsContext } from '../index';

export default function ClientTests() {
  const { clientToUpdate } = useClientsContext();
  const { code } = clientToUpdate;

  return (
    <div className='form-row'>
      <p className='dashboard__single-client'>{code}</p>
    </div>
  );
}
