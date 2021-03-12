import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import tests object
import tests from '../../assets';

// import components
import TestHeader from './TestHeader';
import BirthYearValidator from './BirthYearValidator';
import LoadingNotFoundInvalid from '../LoadingNotFoundInvalid';

// import question types
import { Radio } from './QuestionTypes';

export default function TestTemplate() {
  // grab info from params
  let { testCode, userId, clientId } = useParams();
  userId = userId.slice(userId.indexOf('_') + 1);
  clientId = clientId.slice(clientId.lastIndexOf('_') + 1);
  const test = tests[testCode];

  // state
  const [inputs, setInputs] = useState({});
  const [showTest, setShowTest] = useState(false);
  const [validUrl, setValidUrl] = useState('do not show');

  async function onSubmit(e) {
    e.preventDefault();

    const testInfo = {
      userId,
      clientId,
      testCode,
      res: JSON.stringify(inputs),
    };

    await fetch(`/api/tests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testInfo),
    });
  }

  useEffect(() => {
    async function checkValidUrl() {
      const res = await fetch(
        `/api/clients/check-test-link/${userId}/${clientId}`
      );
      const validUrl = await res.json();
      if (res.ok) setValidUrl(validUrl);
    }
    checkValidUrl();
  }, [userId, clientId]);

  if (!validUrl && validUrl !== 'do not show')
    return <LoadingNotFoundInvalid message={'Invalid URL...'} />;

  return (
    <div className='site__page'>
      {!showTest && (
        <BirthYearValidator setShowTest={setShowTest} clientId={clientId} />
      )}
      {showTest && (
        <div>
          <TestHeader test={test} />
          <form onSubmit={onSubmit}>
            {test.sections.map((section) => {
              return (
                <div key={section.id}>
                  <h3>{section.instructions}</h3>
                  {section.questions.map((question) => {
                    return (
                      <Radio
                        key={`${section.id}-${question.id}`}
                        setInputs={setInputs}
                        section={section}
                        question={question}
                      />
                    );
                  })}
                </div>
              );
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
