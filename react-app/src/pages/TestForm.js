import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import cryptojs
import CryptoJS from 'crypto-js';

// import tests object
import tests from '../assets';

// import css
import '../components/TestForm/TestTemplate.css';

// import components
import TestIntro from '../components/TestForm/TestIntro';
import TestHeader from '../components/TestForm/TestHeader';
import BirthYearValidator from '../components/TestForm/BirthYearValidator';
import TestComplete from '../components/TestForm/TestComplete';
import LoadingNotFoundInvalid from '../components/LoadingNotFoundInvalid';
// import section
import Section from '../components/TestForm/SectionAndQuestionTypes';

export default function TestForm() {
  // grab info from params
  const { testCode, userId, clientId, encURL } = useParams();

  const test = tests[testCode];

  // state
  const [inputs, setInputs] = useState({});
  const [showTest, setShowTest] = useState(false);
  const [validUrl, setValidUrl] = useState('do not show');
  const [testComplete, setTestComplete] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    const testInfo = {
      userId,
      clientId,
      testCode,
      res: JSON.stringify(inputs),
    };

    const res = await fetch(`/api/tests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testInfo),
    });

    if (res.ok) setTestComplete(true);
  }

  useEffect(() => {
    const expectedEncURL = CryptoJS.SHA3(
      `${clientId}x$${testCode}%-${userId}5z`
    )
      .toString()
      .slice(0, 15);

    if (expectedEncURL !== encURL) {
      setValidUrl(false);
      return;
    }

    async function checkValidUserClientCombo() {
      const res = await fetch(
        `/api/clients/check-test-link/${userId}/${clientId}/${testCode}`
      );
      const validUCCombo = await res.json();
      if (res.ok) setValidUrl(validUCCombo);
    }
    checkValidUserClientCombo();
  }, [userId, clientId, encURL, testCode]);

  if (!validUrl && validUrl !== 'do not show')
    return <LoadingNotFoundInvalid message={'Invalid URL...'} />;

  if (testComplete)
    return (
      <div className='site__page'>
        <TestComplete />
      </div>
    );

  return (
    <div className='site__page'>
      {!showTest && (
        <>
          <BirthYearValidator setShowTest={setShowTest} clientId={clientId} />
          <div className='one1rem-ht' />
          <TestIntro length={`${test.minMinutes} - ${test.maxMinutes} minutes`} />
        </>
      )}
      {showTest && (
        <div>
          <TestHeader test={test} />
          <form onSubmit={onSubmit}>
            {test.sections.map((section) => {
              return <Section setInputs={setInputs} section={section} />;
            })}
            <button className='primary-button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
