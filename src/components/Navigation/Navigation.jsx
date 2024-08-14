import styles from './Navigation.module.css';
import { useAuth } from '../hooks';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

// Import your custom icons
import HomeIcon from '../assets/icons/home-icon.svg';  // Update the path to your icon
import PhonebookIcon from '../assets/icons/phonebook-icon.svg';  // Update the path to your icon

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Menu right>
      <Link to="/" className={styles.link}>
        <img src={HomeIcon} alt="Home" className={styles.icon} /> Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={styles.link}>
          <img src={PhonebookIcon} alt="Phonebook" className={styles.icon} /> Phonebook
        </Link>
      )}
    </Menu>
  );
};

export default Navigation;

