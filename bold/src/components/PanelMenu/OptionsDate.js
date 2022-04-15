import { HelpOutline } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TotalDate from './TotalDate';

const OptionsDate = ({ onChange, option }) => {
  return (
    <Card>
      <BottomNavigation
        showLabels
        value={option}
        onChange={onChange}

      >
        <BottomNavigationAction label='Hoy' sx={{ background: option === 0 ? '#969696' : '#FFFFF', borderRadius: 10 }} />
        <BottomNavigationAction label='Esta semana' />
        <BottomNavigationAction label='Abril' />
      </BottomNavigation>
    </Card>
  );
}

export default OptionsDate;