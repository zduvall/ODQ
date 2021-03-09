export function Radio({ section, question, setInputs }) {
  function handleChange(e) {
    const input = {};
    input[question.id] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...input };
    });
  }

  return (
    <div>
      <label>{question.stem}</label>
      <ul>
        {question.scale.map((input) => {
          return (
            <li key={`${section.id}-${question.id}-${input.value}`}>
              <input
                onChange={handleChange}
                type={question.type}
                name={question.id}
                value={input.value}
              ></input>
              <label>{input.label}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
