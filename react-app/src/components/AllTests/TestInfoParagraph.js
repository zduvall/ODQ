export default function TestInfoParagraph({ label, content }) {
  return (
    <p className='new-line-on-slash-n'>
      <span className='underline bold'>{label}</span>: {content}
    </p>
  );
}
