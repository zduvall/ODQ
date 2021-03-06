import AllClients from './AllClients.js';

export default function Clients() {
  return (
    <>
      {/* <div className='dashboard__sub-section client-buttons-container'>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
      </div> */}

      <div className='dashboard__sub-section clients-container'>
        <AllClients />
      </div>
    </>
  );
}
