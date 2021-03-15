export default function Section({ section, resObj }) {
  return (
    <>
      <h4 className='selected-dp__section bold'>{section.instructions}</h4>
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
    <>
      <p className='selected-dp__question'>
        <span className='selected-dp__question-stem'>
          {num}. {question.stem}
        </span>{' '}
        {res}
      </p>
    </>
  );
}
