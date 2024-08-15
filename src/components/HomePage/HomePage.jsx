import React from 'react';
import Header from '../Header/Header'; // Import the Header component
import styles from './HomePage.module.css'; // Import CSS module for styling

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header /> {/* Render the Header component */}
      <div className={styles.mainContent}>
        <h1>Manage Your Finances Masterfully!</h1>
        <p>
          ExpenseTracker effortlessly empowers you to take control of your finances!
          With intuitive features, it simplifies the process of tracking and managing expenses,
          allowing for a stress-free mastery over your financial world.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
