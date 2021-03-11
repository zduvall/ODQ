import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import tests object
import tests from '../../assets';
// import tests from './assets';

// import components
import TestHeader from './TestHeader';
import BirthYearValidator from './BirthYearValidator';

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

  async function onSubmit(e) {
    e.preventDefault();

    const testInfo = {
      userId,
      clientId,
      testCode,
      res: JSON.stringify(inputs),
    };
    console.log('results', testInfo);

    await fetch(`/api/tests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testInfo),
    });
  }

  return (
    <div className='site__page'>
      {!showTest && (
        <BirthYearValidator setShowTest={setShowTest} clientId={clientId} />
      )}
      {showTest && (
        <div>
          <TestHeader test={test} />
          <h2>
            User: {userId}, Client: {clientId}
          </h2>
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
