import { TuneOutlined } from '@mui/icons-material';
import {
  Button,
  Menu,
  ListItemButton,
  Checkbox,
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const FilterData = ({ setFilter, filter }) => {
  const [checks, setChecks] = useState({
    cardm: false,
    link: false,
    all: false,
  });

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

  useMemo(() => {
    handleCheck(filter);
  }, [filter]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const validateFilter = () => {
    const filter = Object.keys(checks).filter(check => checks[check]);
    setFilter(filter.shift());
    handleClose();
  }

  return (
    <>
      <Button
        id='pos-button'
        sx={{ backgroundColor: '#FFFFFF', width: '30%' }}
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
          subheader={<ListSubheader component='div' sx={{ textAlign: 'center' }}>FILTRAR</ListSubheader>}
        >
          <ListItemButton onClick={() => handleCheck('cardm')}>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checks.cardm}
                onChange={() => handleCheck('cardm')}
              />
            </ListItemIcon>
            <ListItemText primary='Cobro con datáfono' />
          </ListItemButton>
          <ListItemButton onClick={() => handleCheck('link')}>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checks.link}
                onChange={() => handleCheck('link')}
              />
            </ListItemIcon>
            <ListItemText primary='Cobros con link de pago' />
          </ListItemButton>
          <ListItemButton onClick={() => handleCheck('all')}>
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checks.all}
                onChange={() => handleCheck('all')}
              />
            </ListItemIcon>
            <ListItemText primary='Ver todos' />
          </ListItemButton>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center', width: '20%', borderRadius: '40px 40px 40px 40px', backgroundColor: '#ef434e' }} onClick={validateFilter}>
              <ListItemText>
                Aplicar
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
    </>
  );
}

FilterData.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string,
}

export default FilterData;