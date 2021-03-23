export default function Section({ section, resObj }) {
  return (
    <>
      <h4 className='selected-dp__section bold'>{section.instructions}</h4>
      <ol>
        {section.questions.map((question) => {
          return (
            <Radio key={question.id} question={question} resObj={resObj} />
          );
        })}
      </ol>
    </>
  );
}

export function Radio({ question, resObj }) {
  const res = question.scale[resObj[question.id]].label;

  return (
    <>
      <li className='selected-dp__question'>
        {question.stem}
        <ul className='selected-dp__res'>
          <li>{res}</li>
        </ul>
      </li>
    </>
  );
}
