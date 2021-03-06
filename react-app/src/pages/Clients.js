import { useState, createContext, useContext } from 'react';

// import components
import ClientContorls from '../components/Clients/ClientsControls';
import AllClients from '../components/Clients/AllClients.js/index.js';

const ClientsContext = createContext();

export const useClientsContext = () => useContext(ClientsContext);

export default function Clients() {
  const [searchClients, setSearchClients] = useState('');
  const [showForm, setShowForm] = useState(false);

  return (
    <ClientsContext.Provider
      value={{
        searchClients,
        setSearchClients,
        showForm,
        setShowForm,
      }}
    >
      <div className='site__page'>
        <h1 className='primary-title'>Clients</h1>
        <ClientContorls />
        <AllClients />
      </div>
    </ClientsContext.Provider>
  );
}
