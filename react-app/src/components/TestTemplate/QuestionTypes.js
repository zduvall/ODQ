export function Radio({ keyBegin, question, input, setInputs, inputs }) {
  function handleChange(e) {
    const input = {};
    input[question.id] = e.target.value;
    console.log(input);
    console.log(inputs); // delete this prop when deleting this console.log()
    setInputs((prev) => {
      return { ...prev, ...input };
    });
  }

  return (
    <li key={`${keyBegin}-${input.value}`}>
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
