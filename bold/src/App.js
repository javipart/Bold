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

  return (
    <div className="App">
      <NavBar />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PanelMenu
              onChange={onChange}
              option={optionDate}
              totalSales={totalSales}
              filter={filter}
              setFilter={validateFilter}
            />
          </Grid>
          <Grid item xs={12}>
            <PanelTable
              option={optionDate}
              loading={loading}
              data={sales}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
