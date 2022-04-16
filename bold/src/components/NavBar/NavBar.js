import React from 'react';
import { AppBar, Button, Container, Toolbar, Tooltip } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

const NavBar = () => {
  return (
    <AppBar position='static' className='App-header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <section className='Panel-header'>
            <img src='/logo.svg' alt='Bold' className='App-logo' />
          </section>
          <div style={{ textAlign: 'end', width: '100%' }}>
            <Button sx={{ color: '#FFFFFF' }}>
              Mi negocio
            </Button>
            <Button
              sx={{ color: '#FFFFFF' }}
              endIcon={
                <Tooltip title='¿Necsitas Ayuda?'>
                  <HelpOutline />
                </Tooltip>}>
              Ayuda
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;