import { useNavigate } from 'react-router-dom';
import styles from '../css/header.module.css';

const Header = () => {
  const navigate = useNavigate();

  const handleClickMenu = (path: string) => {
    // path -> "/", "/portfolio", "/skill"
    navigate(path);
  };

  return (
    <header className={styles.headerContainer}>
      <button
        className={styles.navButton}
        onClick={() => handleClickMenu('/')}
      >
        Home
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClickMenu('/portfolio')}
      >
        Portfolio
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClickMenu('/skill')}
      >
        Skill
      </button>
    </header>
  );
};

export default Header;