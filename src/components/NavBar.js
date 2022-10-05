import React from 'react';
import { IconContext } from 'react-icons';
import { useLocation, Link } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import styles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname === '/');
  const {
    nav, backSection, navTitle, navRightIcon,
  } = styles;

  return (
    <nav className={nav}>
      <div className={backSection}>
        {
          pathname !== '/'
          && (
          <Link to="/" style={{ color: '#fff' }}>
            <IconContext.Provider value={{ style: { fontSize: '30px', cursor: 'pointer' } }}>
              <FaAngleLeft />
            </IconContext.Provider>
          </Link>
          )
        }
        2022
      </div>
      <div className={navTitle}>Assets</div>
      <div className={navRightIcon}>
        <FaMicrophone />
        <FaCog />
      </div>
    </nav>
  );
};

export default NavBar;
