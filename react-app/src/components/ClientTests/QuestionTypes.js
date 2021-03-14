// import context
import { useClientTestsContext } from './index';

export function Radio({ dp }) {
  const { selectedTest } = useClientTestsContext();

  function getQuestion(qstnId, val) {
    const sctnIdx =
      qstnId.slice(qstnId.indexOf('s') + 1, qstnId.indexOf('q')) - 1;
    const qstnNum = qstnId.slice(qstnId.indexOf('q') + 1);

    const question = selectedTest.sections[sctnIdx].questions[qstnNum - 1];
    const response = question.scale[val].label;
    return [qstnNum, question.stem, response];
  }

  const [num, question, response] = getQuestion(...dp);

  return (
    <div>
      <p>
        {num}. {question}
      </p>
      <p>{response}</p>
    </div>
  );
}
