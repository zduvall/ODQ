// import components
import NewUrlControls from './NewUrlControls';

// import context
import { useClientsContext } from '../index';

export default function ClientSingle() {
  const { selectedClient } = useClientsContext();

  return (
    <>
      <div className='dashboard__sub-section dashboard__single-client'>
        <div className='dashboard__data'>
          <p>{selectedClient.code}</p>
        </div>
        <NewUrlControls />
      </div>
    </>
  );
}
