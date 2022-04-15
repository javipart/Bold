import { HelpOutline, TuneOutlined } from '@mui/icons-material';
import { Button, Menu, ListItemButton, Checkbox, List, ListSubheader, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import React, { useState } from 'react';
import TotalDate from './TotalDate';

const FilterData = ({ setFilter }) => {
  const [checks, setChecks] = useState({
    cardm: false,
    link: false,
    all: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheck = (value) => {
    const newChecks = {};
    for (const check in checks) {
      if (check === value) {
        newChecks[check] = true;
      } else {
        newChecks[check] = false;
      }
    }
    setChecks(newChecks);
  }

  const validateFilter = () => {
    const filter = Object.keys(checks).filter(check => checks[check]);
    setFilter(filter.shift());
  }

  return (
    <>
      <Button
        id='pos-button'
        sx={{ backgroundColor: '#FFFFFF' }}
        endIcon={<TuneOutlined />}
        onClick={handleClick}
        aria-haspopup='true'
        aria-controls={open ? 'pos-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
      >
        FILTRAR
      </Button>
      <Menu
        id='pos-menu'
        aria-labelledby='pos-button'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}

      >
        <List
          subheader={<ListSubheader>FILTRAR</ListSubheader>}
        >
          <ListItemButton>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checks.cardm}
                onChange={() => handleCheck('cardm')}
              />
            </ListItemIcon>
            <ListItemText primary='Cobro con datáfono' />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checks.link}
                onChange={() => handleCheck('link')}
              />
            </ListItemIcon>
            <ListItemText primary='Cobros con link de pago' />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checks.all}
                onChange={() => handleCheck('all')}
              />
            </ListItemIcon>
            <ListItemText primary='Ver todos' />
          </ListItemButton>
          <ListItem alignItems='center'>
            <Button onClick={validateFilter}>
              Aplicar
            </Button>
          </ListItem>
        </List>
      </Menu>
    </>
  );
}

export default FilterData;