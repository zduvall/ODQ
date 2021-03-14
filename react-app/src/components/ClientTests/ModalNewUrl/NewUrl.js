import { useState } from 'react';

export default function NewUrl({ client, newUrl, test }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(newUrl);
    setCopied(true);
  }

  return (
    <>
      <h2 className='cntr-txt-sml-margin'>
        <span className='new-url-modal__emph'>{test.abbr}</span> link for{' '}
        <span className='new-url-modal__emph'>{client.code}</span>
      </h2>
      <p
        className='cntr-txt-sml-margin new-url-modal__link'
        onClick={() => window.open(newUrl, '_blank')}
      >
        {newUrl}
      </p>
      <button className='primary-button' onClick={copy} disabled={copied}>
        {copied ? 'Copied': 'Copy to Clipboard'}
      </button>
      <p className='cntr-txt-sml-margin new-url-modal__sml'>
        This is a{' '}
        <span style={{ textDecoration: 'underline' }}>
          unique link only for {client.code}
        </span>{' '}
        to complete the {test.abbr} repeatedly as long as needed. You can always
        regenerate the link here.
      </p>
    </>
  );
}
