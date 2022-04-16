import { HelpOutline } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TotalDate from './TotalDate';

const OptionsDate = ({ onChange, option }) => {
  const getDate = () => {
    const now = new Date();
    const str = now.toLocaleString('default', { month: 'long' });
    const month = str.charAt(0).toUpperCase() + str.slice(1);
    return month;
  }

  return (
    <BottomNavigation
      showLabels
      value={option}
      onChange={onChange}
      sx={{ height: 40 }}

    >
      <BottomNavigationAction sx={{ background: option === 0 ? '#d2d4e1' : '#fff', borderRadius: 20, margin: 0.5 }} label='Hoy' />
      <BottomNavigationAction sx={{ background: option === 1 ? '#d2d4e1' : '#fff', borderRadius: 20, margin: 0.5 }} label='Esta semana' />
      <BottomNavigationAction sx={{ background: option === 2 ? '#d2d4e1' : '#fff', borderRadius: 20, margin: 0.5 }} label={getDate()} />
    </BottomNavigation>
  );
}

export default OptionsDate;