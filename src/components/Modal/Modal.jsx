// src/components/Modal/Modal.jsx
import React, { useEffect } from 'react';
import TransactionsHistoryNav from '../TransactionsHistoryNav/TransactionsHistoryNav';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import styles from './Modal.module.css'; // Import CSS module

const Modal = ({ isOpen, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]); // Added handleKeyDown to dependency array

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <TransactionsHistoryNav />
        <UserBarBtn />
      </div>
    </div>
  );
};

export default Modal;
