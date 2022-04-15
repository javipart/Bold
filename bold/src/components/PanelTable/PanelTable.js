import React from 'react';
import {
  CircularProgress,
  Paper,
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

const PanelTable = ({ data, loading, option }) => {

  const options = {
    0: 'Hoy',
    1: 'Esta semana',
    2: 'Abril'
  };

  const getMount = (amount, deduction, status) => {
    if (status) {
      return (
        <>
          ${' '}<span>{amount}</span>
          <span>Deducción Bold</span>
          -$<span>{deduction}</span>
        </>
      );
    }
    return (
      <>${' '}<span>{amount}</span></>
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
    return (<>{icon}<span>{text}</span></>);
  };

  return (
    <>
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
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 750 }}
          size='medium'
        >
          <TableHead>
            <TableRow>
              <TableCell>Transacción</TableCell>
              <TableCell>Fecha y hora</TableCell>
              <TableCell>Método de pago</TableCell>
              <TableCell>ID transacción Bold</TableCell>
              <TableCell>Monto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? <CircularProgress color='success' />
              : data.map(item => (
                <TableRow>
                  <TableCell>{getTransaction(item.mode, item.status)}</TableCell>
                  <TableCell>{item.date.replaceAll('-', '/').replace('T', ' - ').split('.')[0]}</TableCell>
                  <TableCell>{<><CreditCardOutlined /> **** **** **** {item.method.split('-')[1]}</>}</TableCell>
                  <TableCell>{item.transactionId}</TableCell>
                  <TableCell>{getMount(item.amount, item.deduction, item.status)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PanelTable;