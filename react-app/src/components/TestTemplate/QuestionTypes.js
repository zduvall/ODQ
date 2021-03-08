export function Radio({ question, input }) {
  return (
    <li key={question.id}>
      <input type={question.type} name='likert' value={input.value}></input>
      <label>{input.label}</label>
    </li>
  );
}
