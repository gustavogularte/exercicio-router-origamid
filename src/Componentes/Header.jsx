import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
