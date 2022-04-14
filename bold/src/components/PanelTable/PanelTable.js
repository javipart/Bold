import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import React from 'react';

const PanelTable = () => {
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
          Tus ventas de Septiembre
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
            <TableRow>
              {/* {data.map(item => (
                <TableCell>{item.result}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.method}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.amount}</TableCell>
              ))} */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PanelTable;