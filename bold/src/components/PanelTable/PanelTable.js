import React from 'react';
import {
  Card,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';
import { PointOfSale, Link, CreditCardOutlined } from '@mui/icons-material';

const PanelTable = ({ data, loading, option, formatterField }) => {


  const getDate = () => {
    const now = new Date();
    const str = now.toLocaleString('default', { month: 'long' });
    const month = str.charAt(0).toUpperCase() + str.slice(1);
    return month;
  };

  const options = {
    0: 'Hoy',
    1: 'Esta semana',
    2: getDate(),
  };

  const getMount = (amount, deduction, status) => {
    if (status) {
      return (
        <>
          <Typography color='#111e6c' fontSize={13}>{formatterField.format(amount)}</Typography>
          <Typography color='#969696' fontSize={12}>Deducción Bold</Typography>
          <Typography color='#ef434e' fontSize={11}>{`- ${formatterField.format(deduction)}`}</Typography>
        </>
      );
    }
    return (
      <Typography color='#111e6c' fontSize={13}>{formatterField.format(amount)}</Typography>
    )
  }

  const getTransaction = (mode, status) => {
    let icon = <PointOfSale />
    let text = ' Cobro exitoso';
    if (mode === 'link') {
      icon = <Link />
    }
    if (status == 0) {
      text = ' Cobro no realizado';
    }
    return (
      <div
        style={{
          display: 'inline-flex',
          verticalAlign: 'text-bottom',
          boxSizing: 'inherit',
          textAlign: 'center',
          alignItems: 'center',
          color: '#111e6c'
        }}
      >
        {icon}
        &nbsp;&nbsp;
        <span>
          {text}
        </span>
      </div>);
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <Toolbar
        className='Table-bar'
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          {`Tus ventas de ${options[option]}`}
        </Typography>
      </Toolbar>
      <TableContainer sx={{ maxHeight: 470, minHeight: 470 }}>
        {loading
          ?
          (
            <LinearProgress />
          )
          :
          (
            <Table
              size='medium'
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  <TableCell>Transacción</TableCell>
                  <TableCell>Fecha y hora</TableCell>
                  <TableCell>Método de pago</TableCell>
                  <TableCell>ID transacción Bold</TableCell>
                  <TableCell>Monto</TableCell>
                </TableRow>
              </TableHead >
              <TableBody>
                {data.map(item => (
                  <TableRow>
                    <TableCell>{getTransaction(item.mode, item.status)}</TableCell>
                    <TableCell sx={{ color: '#969696' }}>{item.date.replaceAll('-', '/').replace('T', ' - ').split('.')[0]}</TableCell>
                    <TableCell sx={{ color: '#969696' }}>{
                      <div
                        style={{
                          display: 'inline-flex',
                          verticalAlign: 'text-bottom',
                          boxSizing: 'inherit',
                          textAlign: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <CreditCardOutlined />&nbsp;&nbsp;**** **** **** {item.method.split('-')[1]}
                      </div>
                    }</TableCell>
                    <TableCell sx={{ color: '#969696' }}>{item.transactionId}</TableCell>
                    <TableCell >{getMount(item.amount, item.deduction, item.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table >
          )}
      </TableContainer >
    </Card >
  );
}

export default PanelTable;