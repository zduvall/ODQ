import GAD7 from './assets/GAD7.json';

export default function template() {
  return (
    <div>
      <h1>{GAD7.name}</h1>
      <p>{GAD7.instructions}</p>
      <form></form>
    </div>
  );
}
