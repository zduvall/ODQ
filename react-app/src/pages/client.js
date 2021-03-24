import { useState, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import components
import ClientInfo from '../components/Client/ClientInfo';
import ClientControls from '../components/Client/ClientControls';
// import NewUrlControls from '../components/Client/NewUrlControls';
// import ClientAllTests from '../components/Client/ClientAllTests';
import SelectedTest from '../components/Client/SelectedTest';
import DropdownTestInfo from '../components/Client/DropdownTestInfo';
import LoadingNotFoundInvalid from '../components/LoadingNotFoundInvalid';

// import tests
import tests from '../assets';

const ClientTestsContext = createContext();
export const useClientTestsContext = () => useContext(ClientTestsContext);

export default function ClientTests() {
  // state
  const [selectedTest, setSelectedTest] = useState();
  const [dropdownTest, setDropdownTest] = useState({ code: '' });
  const [datapoint, setDatapoint] = useState(null);

  // params and store
  const { clientId } = useParams();
  const client = useSelector((state) => state.clients[clientId]);

  if (!client) return <LoadingNotFoundInvalid message={'Loading eDOT...'} />;

  const clientTests = Object.values(client.tests);

  // tests this client has completed (as an array of codes (strings) and array of objects)
  let compTestCodes = new Set();
  clientTests.forEach((test) => compTestCodes.add(test.testCode));
  compTestCodes = Array.from(compTestCodes);
  const compTestObjs = Object.values(tests).filter((test) =>
    compTestCodes.includes(test.code)
  );

  return (
    <ClientTestsContext.Provider
      value={{
        client,
        clientId: client.id,
        clientTests,
        compTestCodes,
        compTestObjs,
        dropdownTest,
        setDropdownTest,
        datapoint,
        setDatapoint,
        selectedTest,
        setSelectedTest,
      }}
    >
      <div className='site__page'>
        <h1 className='primary-title'>{client.code}</h1>
        <ClientInfo />
        <div className='one1rem-ht' />
        <ClientControls />
        <div className='one1rem-ht' />
        {/* <NewUrlControls />
        <div className='one1rem-ht' /> */}
        {/* {!dropdownTest.code && <ClientAllTests />} */}
        {dropdownTest.code && <DropdownTestInfo />}
        {!dropdownTest.code && selectedTest && (
          <>
            {/* <div className='one1rem-ht' /> */}
            <SelectedTest />
          </>
        )}
        <div className='one1rem-ht' />
      </div>
    </ClientTestsContext.Provider>
  );
}
