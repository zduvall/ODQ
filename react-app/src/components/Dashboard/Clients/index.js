import { useState, createContext, useContext } from 'react';

// import components
import ClientContorls from './ClientControls';
import AllClients from './AllClients.js';
import ClientFrom from './ClientForm';

const ClientsContext = createContext();
export const useClientsContext = () => useContext(ClientsContext);

export default function Clients() {
  const [searchClients, setSearchClients] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [clientToUpdate, setClientToUpdate] = useState(null);

  return (
    <ClientsContext.Provider
      value={{
        searchClients,
        setSearchClients,
        showForm,
        setShowForm,
        clientToUpdate,
        setClientToUpdate,
      }}
    >
      <ClientContorls />
      <div className='dashboard__sub-section clients-container'>
        {!showForm && <AllClients />}
        {showForm && <ClientFrom />}
      </div>
    </ClientsContext.Provider>
  );
}
