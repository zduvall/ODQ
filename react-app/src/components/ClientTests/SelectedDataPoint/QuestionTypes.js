// import context
import { useClientTestsContext } from '../index';

export default function Section({ section, resObj }) {
  return (
    <>
      <h4>{section.instructions}</h4>
      {section.questions.map((question) => {
        return <Radio question={question} resObj={resObj} />;
      })}
    </>
  );
}

export function Radio({ question, resObj }) {
  
  const num = question.id.slice(question.id.indexOf('q') + 1);
  const res = question.scale[resObj[question.id]].label;

  return (
    <div>
      <p>
        {num}. {question.stem}
      </p>
      <p>{res}</p>
    </div>
  );
}
