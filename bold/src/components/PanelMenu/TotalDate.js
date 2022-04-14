import { HelpOutline } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';

const TotalDate = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='Total de ventas de Septiembre'
        action={<HelpOutline />}
      />
      <CardContent>
        <Typography variant='body2' color='#7A3E6C'>
          1.560.000
        </Typography>
        <Typography variant='body3' color='#111e6c'>
          Septiembre, 2020
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalDate;