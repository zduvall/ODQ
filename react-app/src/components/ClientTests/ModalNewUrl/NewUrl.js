export default function NewUrl({ client, newUrl, test }) {
  function copy() {
    navigator.clipboard.writeText(newUrl);
    console.log('copied!');
  }

  return (
    <>
      <h2 className='new-url-modal__item'>
        {test.abbr} link for {client.code}
      </h2>
      <p className='new-url-modal__item'>{newUrl}</p>
      <button className='primary-button' onClick={copy}>
        Copy to Clipboard
      </button>
    </>
  );
}
