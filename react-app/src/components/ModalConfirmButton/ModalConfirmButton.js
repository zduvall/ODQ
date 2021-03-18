export default function ModalConfirmButton({ message }) {
  return (
    <>
      <h2 className='primary-title cntr-txt-sml-margin'>{message}</h2>
      <div>
        <button className='primary-button'>Cancel</button>
        <button className='delete-button'>Proceed</button>
      </div>
    </>
  );
}
