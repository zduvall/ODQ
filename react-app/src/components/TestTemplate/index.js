import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import tests object
import tests from './assets';

// import components
import TestHeader from './TestHeader';

// import question types
import { Radio } from './QuestionTypes';

export default function TestTemplate() {
  const { testCode, userId, clientId } = useParams();
  const test = tests[testCode];

  const [inputs, setInputs] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    console.log('results', inputs);
  }

  return (
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
  );
}
