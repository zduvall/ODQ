export function Radio({ question, input, setInputs }) {
  function handleChange(e) {
    const input = {};
    input[question.id] = e.target.value;
    setInputs((prev) => {
      return { ...prev, input };
    });
  }

  return (
    <li key={`${question.id}-${input.value}`}>
      <input
        onChange={handleChange}
        type={question.type}
        name={question.id}
        value={input.value}
      ></input>
      <label>{input.label}</label>
    </li>
  );
}
