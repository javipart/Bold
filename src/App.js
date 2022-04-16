import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import PanelMenu from './components/PanelMenu/PanelMenu';
import PanelTable from './components/PanelTable/PanelTable';
import { Container, Grid } from '@mui/material';

import {
  getAccountStatus,
  changeOptionDate,
  setFilter,
} from './actions/accountStatusAction';

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const store = useStore();
  const dispatch = useDispatch();
  const accountStatus = useSelector((state = store.getState()) => state.accountStatus);
  const { optionDate, sales, filter, loading, totalSales } = accountStatus;

  useEffect(() => {
    dispatch(getAccountStatus());
  }, [optionDate, filter]);

  const onChange = (e, value) => {
    dispatch(changeOptionDate(value));
  };

  const validateFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const formatterField = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: '#111e6c'
      },
      secondary: {
        main: '#ef434e'
      },
    }
  })

  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <NavBar />
        <Container maxWidth='xl' sx={{ paddingTop: '30px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PanelMenu
                onChange={onChange}
                option={optionDate}
                totalSales={totalSales}
                filter={filter}
                setFilter={validateFilter}
                formatterField={formatterField}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <PanelTable
                option={optionDate}
                loading={loading}
                data={sales}
                formatterField={formatterField}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
