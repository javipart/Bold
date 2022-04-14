import React, { } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

const NavBar = () => {
  return (
    <AppBar position='static' className='App-header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <section className='Panel-header'>
            <img src='/logo.svg' alt='Bold' className='App-logo' />
          </section>
          <Box>
            <Button sx={{ color: '#FFFFFF' }}>
              Mi negocio
            </Button>
          </Box>
          <Box>
            <Button sx={{ color: '#FFFFFF' }} endIcon={<HelpOutline />}>
              Ayuda
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;