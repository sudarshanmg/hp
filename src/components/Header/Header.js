import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes['header-container']}>
      <header className={classes.header}>Harry Potter</header>
      <header className={classes.tagline}>Welcome to the Harry Potter Library.</header>
    </div>
  );
}

export default Header;
