import { useState, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import components
import NewUrlControls from './NewUrlControls';
import ClientAllTests from './ClientAllTests';
import SelectedTest from './SelectedTest';

// import tests
import tests from '../TestTemplate/assets';

const ClientTestsContext = createContext();
export const useClientTestsContext = () => useContext(ClientTestsContext);

export default function ClientTests() {
  // state
  const [selectedTest, setSelectedTest] = useState();

  // params and store
  const { clientId } = useParams();
  const client = useSelector((state) => state.clients[clientId]);
  const allClientsTests = useSelector((state) => Object.values(state.tests));
  const clientTests = allClientsTests.filter(
    (test) => test.clientId === Number(clientId)
  );

  // tests this client has completed
  let compTestCodes = new Set();
  clientTests.forEach((test) => compTestCodes.add(test.testCode));
  compTestCodes = Array.from(compTestCodes);

  if (!client) return <h1 className='loading'>Loading DOT...</h1>;

  return (
    <ClientTestsContext.Provider
      value={{
        client,
        compTestCodes,
        selectedTest,
        setSelectedTest,
        clientTests,
      }}
    >
      <div className='site__page'>
        <h1 className='primary-title'>{client.code} Tests</h1>
        <NewUrlControls />
        <div className='one1rem-ht' />
        <ClientAllTests />
        {selectedTest && (
          <>
            <div className='one1rem-ht' />
            <SelectedTest />
          </>
        )}
        <div className='one1rem-ht' />
      </div>
    </ClientTestsContext.Provider>
  );
}
