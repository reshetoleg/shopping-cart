import { NavLink, Link, useLocation } from 'react-router-dom';

import { useAuthContext } from 'hooks/useAuthContext';

import { RiMenuLine } from 'react-icons/ri';
import { CgSearch } from 'react-icons/cg';

import CartIcon from './CartIcon';

import LogoNav from 'assets/images/logo-nav.png';

import styles from './index.module.scss';

const Navbar = ({ toggleSideNav, toggleCartModal }) => {
  const { pathname } = useLocation();

  const { isVerified } = useAuthContext();

  const handleToggleCartModal = () => {
    if (pathname !== '/carrito') {
      toggleCartModal();
    }
  };

  return (
    <nav className={`${styles.nav}`}>
      <div className={styles.container_top}>
        {!isVerified && (
          <Link to="/cuenta/login" className={styles.link}>
            Login
          </Link>
        )}
        {isVerified && (
          <Link to="/cuenta" className={styles.link}>
            Mi Cuenta
          </Link>
        )}
      </div>
      <div className={styles.container_bottom}>
        <Link to="/">
          <img className={styles.logo} src={LogoNav} alt="Logo Nav" />
        </Link>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} to="/categorias/remeras">
              Remeras
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/categorias/buzos">
              Buzos
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/categorias/accesorios">
              Accesorios
            </NavLink>
          </li>
        </ul>
        <ul className={styles.icons_menu}>
          <li className={`${styles.search_icon} disabled-link`}>
            <CgSearch />
          </li>
          <li className={styles.cart_icon} onClick={handleToggleCartModal}>
            <CartIcon />
          </li>
          <li className={styles.mobile_icon}>
            <RiMenuLine onClick={toggleSideNav} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
