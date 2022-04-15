import { HelpOutline } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';

const TotalDate = ({ option, totalSales }) => {

  const options = {
    0: 'Hoy',
    1: 'Esta semana',
    2: 'Abril'
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardHeader
        title={`Total de ventas de ${options[option]}`}
        action={<HelpOutline />}
      />
      <CardContent>
        <Typography variant='body2' color='#7A3E6C'>
          {totalSales}
        </Typography>
        <Typography variant='body3' color='#111e6c'>
          Abril, 2022
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalDate;