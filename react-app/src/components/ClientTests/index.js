import { useState, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import components
import NewUrlControls from './NewUrlControls';
import ClientAllTests from './ClientAllTests';
import SelectedTest from './SelectedTest';
import LoadingNotFoundInvalid from '../LoadingNotFoundInvalid';
import DropdownTestInfo from './DropdownTestInfo';

// import tests
import tests from '../../assets';
// import tests from '../TestTemplate/assets';

const ClientTestsContext = createContext();
export const useClientTestsContext = () => useContext(ClientTestsContext);

export default function ClientTests() {
  // state
  const [selectedTest, setSelectedTest] = useState();
  const [dropdownTest, setDropdownTest] = useState({ code: '' });

  // params and store
  const { clientId } = useParams();
  const client = useSelector((state) => state.clients[clientId]);
  const allClientsTests = useSelector((state) => Object.values(state.tests));
  const clientTests = allClientsTests.filter(
    (test) => test.clientId === Number(clientId)
  );

  // tests this client has completed (as an of codes (str) and array of objects)
  let compTestCodes = new Set();
  clientTests.forEach((test) => compTestCodes.add(test.testCode));
  compTestCodes = Array.from(compTestCodes);
  const compTestObjs = Object.values(tests).filter((test) =>
    compTestCodes.includes(test.code)
  );

  if (!client) return <LoadingNotFoundInvalid message={'Loading DOT...'} />;

  return (
    <ClientTestsContext.Provider
      value={{
        client,
        compTestCodes,
        compTestObjs,
        dropdownTest,
        setDropdownTest,
        selectedTest,
        setSelectedTest,
        clientTests,
      }}
    >
      <div className='site__page'>
        <h1 className='primary-title'>{client.code}</h1>
        <NewUrlControls />
        <div className='one1rem-ht' />
        {!dropdownTest.code && <ClientAllTests />}
        {dropdownTest.code && <DropdownTestInfo />}
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
