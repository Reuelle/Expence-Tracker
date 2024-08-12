// src/components/UserSetsModal/UserSetsModal.jsx
import React from 'react';
import styles from './UserSetsModal.module.css'; // Import CSS module

const UserSetsModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Profile Settings</h2>
        {/* Add form elements for user settings here */}
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          {/* Add other fields as needed */}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default UserSetsModal;
