import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import variables from '../styles/components/header.module.scss';

const Header = () => {
  return (
    <AppBar position="static" className={variables.header}>
      <Toolbar>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src="./logo.png" alt="Logo" style={{ height: '60px', width: 'auto' }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;