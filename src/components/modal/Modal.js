import React from 'react';
import style from './Modal.module.css';

const Modal = ({ children, closeModal }) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={closeModal}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
