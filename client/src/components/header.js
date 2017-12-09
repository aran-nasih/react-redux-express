import React from 'react';
import { colors } from '../consts/baseStyles'

const Header = () => (
  <div style={styles.header}>
    <div >
    </div>
    <h1>React, Redux and Express </h1>
  </div>
);

const styles = {
  header: {
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    backgroundColor: colors.magicPurple,
    color: 'white'
  }
}

export default Header;
