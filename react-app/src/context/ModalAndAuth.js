import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalAndAuthContext = createContext();
export const useModalAndAuthContext = () => useContext(ModalAndAuthContext);

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalAndAuthContext.Provider
        value={{ modalNode: value, authenticated, setAuthenticated }}
      >
        {children}
      </ModalAndAuthContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const { modalNode } = useModalAndAuthContext();
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id='modal'>
      <div id='modal-background' onClick={onClose} />
      <div id='modal-content'>{children}</div>
    </div>,
    modalNode
  );
}
