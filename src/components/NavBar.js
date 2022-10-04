import React from 'react';
import styles from './NavBar.module.css';
import { IconContext } from 'react-icons';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const NavBar = () => {
  const {nav, backSection, navTitle, navRightIcon} = styles;
  return (
    <nav className={nav}>
      <div className={backSection}>
      <IconContext.Provider value={{ style: {fontSize: '20px', cursor: 'pointer'} }}>
        <FaAngleLeft />
      </IconContext.Provider>
        2022
      </div>
      <div className={navTitle}>Assets</div>
      <div className={navRightIcon}>
        <FaMicrophone />
        <FaCog />
      </div>
    </nav>
  )
}

export default NavBar