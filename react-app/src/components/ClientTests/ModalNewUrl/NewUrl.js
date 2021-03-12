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
      <p className='new-url-modal__text new-url-modal__sml'>{`This is a custom link for ${client.code} to use the ${test.abbr} repeatedly as long as needed. You can always regenerate the link here.`}</p>
    </>
  );
}
