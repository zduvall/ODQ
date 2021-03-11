export default function NewUrl({ client, newUrl, test }) {
  function copy() {
    navigator.clipboard.writeText(newUrl);
    console.log('copied!');
  }

  return (
    <>
      <h2 className='new-url-modal__text'>
        <span className='new-url-modal__emph'>{test.abbr}</span> link for{' '}
        <span className='new-url-modal__emph'>{client.code}</span>
      </h2>
      <p
        className='new-url-modal__text new-url-modal__link'
        onClick={() => window.open(newUrl, '_blank')}
      >
        {newUrl}
      </p>
      <button className='primary-button' onClick={copy}>
        Copy to Clipboard
      </button>
    </>
  );
}
