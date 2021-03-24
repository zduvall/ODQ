export default function ModalConfirmButton({ title, message }) {
  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>{title}</h2>
      <p className='new-line-on-slash-n'>{message}</p>
    </>
  );
}
