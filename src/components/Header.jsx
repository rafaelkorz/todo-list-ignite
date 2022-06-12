import styles from './Header.module.css';
import logo from './Logo.png'

import React from 'react';

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
    </div>
  
  )
}

export default Header
