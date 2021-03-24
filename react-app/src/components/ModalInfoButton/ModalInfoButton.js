export default function ModalConfirmButton({
  title,
  message
}) {


  return (
    <>
      <h3 className='primary-title cntr-txt-sml-margin'>{title}</h3>
      <p>{message}</p>
    </>
  );
}