import { useState, createContext, useContext } from 'react';

// import components
import ClientContorls from './ClientControls';
import AllClients from './AllClients.js';
import ClientFrom from './ClientForm';
import ClientSingle from './ClientSingle';

const ClientsContext = createContext();

export const useClientsContext = () => useContext(ClientsContext);

export default function Clients() {
  const [searchClients, setSearchClients] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <ClientsContext.Provider
      value={{
        searchClients,
        setSearchClients,
        showForm,
        setShowForm,
        selectedClient,
        setSelectedClient,
      }}
    >
      <ClientContorls />
      {selectedClient && !showForm && <ClientSingle />}
      {!selectedClient && !showForm && <AllClients />}
      {showForm && <ClientFrom />}
      <div className='One1rem-height'></div>
    </ClientsContext.Provider>
  );
}
