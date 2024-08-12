// src/components/UserPanel/UserPanel.jsx
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth'; // Adjust path as needed
import defaultAvatar from './icons8-avatar.gif'; // Adjust path as needed
import styles from './UserPanel.module.css'; // Import CSS module
import { ReactComponent as ArrowDownIcon } from './icons/arrow-down.svg'; // Adjust path as needed
import { ReactComponent as ArrowUpIcon } from './icons/arrow-up.svg'; // Adjust path as needed

const UserPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth(); // Custom hook to get user data

  const togglePanel = () => setIsOpen(!isOpen);

  const userInitial = user?.name?.charAt(0).toUpperCase();
  const avatar = user?.avatar || defaultAvatar;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={togglePanel}>
        <div className={styles.avatar}>
          {user?.avatar ? (
            <img src={avatar} alt="User Avatar" />
          ) : (
            <span>{userInitial}</span>
          )}
        </div>
        <div className={styles.userName}>{user?.name}</div>
        <div className={styles.icon}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {/* Add dropdown items here */}
          <button className={styles.dropdownItem}>Profile</button>
          <button className={styles.dropdownItem}>Settings</button>
          <button className={styles.dropdownItem}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
