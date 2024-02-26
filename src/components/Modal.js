// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div>
      <div>
        {children}
        <button onClick={()=>onClose()}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
