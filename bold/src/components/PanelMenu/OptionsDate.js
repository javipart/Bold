import { HelpOutline } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TotalDate from './TotalDate';

const OptionsDate = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{width: 500}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Hoy'/>
        <BottomNavigationAction label='Esta semana'/>
        <BottomNavigationAction label='Septiembre'/>
      </BottomNavigation>
    </Box>
  );
}

export default OptionsDate;