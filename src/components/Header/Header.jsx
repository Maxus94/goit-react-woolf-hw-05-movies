import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <ul className={css.headerMenu}>
      <li>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={css.headerLink} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
