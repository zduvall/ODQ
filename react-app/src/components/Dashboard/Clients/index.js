import { useState } from 'react';

// import components
import AllClients from './AllClients.js';
import ClientFrom from './ClientForm';

export default function Clients() {
  const [showForm, setShowForm] = useState(false);

  function toggleShowForm() {
    setShowForm((prev) => !prev);
  }

  return (
    <>
      {/* <div className='dashboard__sub-section client-buttons-container'> */}
      <button
        className='primary-button dashboard__button'
        onClick={toggleShowForm}
      >
        Add Client
      </button>
      {/* </div> */}

      <div className='dashboard__sub-section clients-container'>
        {!showForm && <AllClients />}
        {showForm && <ClientFrom setShowForm={setShowForm} />}
      </div>
    </>
  );
}
