import React, { useState } from 'react';
import { Modal } from '../../../context/ModalAndAuth';
import SignUpForm from './SignUpForm';

export default function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}
