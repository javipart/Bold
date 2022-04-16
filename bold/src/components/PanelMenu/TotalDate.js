import { HelpOutline } from '@mui/icons-material';
import { Card, CardContent, CardHeader, CircularProgress, Grid, Tooltip, Typography } from '@mui/material';
import React from 'react';

const TotalDate = ({ option, totalSales, formatterField, loading }) => {

  const getMonth = () => {
    const now = new Date();
    const str = now.toLocaleString('default', { month: 'long' });
    const month = str.charAt(0).toUpperCase() + str.slice(1);
    return month;
  }

  const options = {
    0: 'Hoy',
    1: 'Esta semana',
    2: getMonth(),
  };


  const getDate = () => {
    const now = new Date();
    const month = getMonth();
    if (option === 0) {
      return `${month} ${now.getDate()}`;
    } else if (option === 1) {
      return `${month} ${now.getDate() - now.getDay()} - ${month} ${now.getDate()}`;
    } else {
      return `${month} ${now.getFullYear()}`;
    }
  }

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardHeader
        title={`Total de ventas de ${options[option]}`}
        action={
          <Tooltip title='Total de ventas sin comisión de Bold'>
            <HelpOutline />
          </Tooltip>}
        sx={{ background: 'linear-gradient(90deg, #703368, #C06980)', color: '#fff', height: '20px' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h4' color='#75396A'>
          {loading ? <CircularProgress /> : formatterField.format(totalSales)}
        </Typography>
        <Typography variant='h7' color='#111e6c'>
          {getDate()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalDate;