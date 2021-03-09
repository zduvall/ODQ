import { useParams } from 'react-router-dom';

// import tests object
import tests from './assets';

// import question types
import { Radio } from './QuestionTypes';

export default function TestTemplate() {
  const { testCode } = useParams();
  const test = tests[testCode];

  return (
    <div>
      <h1>{test.abbr}</h1>
      <p>{test.instructions}</p>
      <form>
        {test.sections.map((section) => {
          return (
            <div key={section.id}>
              <h2>{section.instructions}</h2>
              {section.questions.map((question) => {
                return (
                  <div key={question.id}>
                    <label>{question.stem}</label>
                    <ul>
                      {question.scale.map((input) => {
                        return <Radio question={question} input={input} />;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
        <button type='submit'></button>
      </form>
    </div>
  );
}
