import { HelpOutline } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
import PanelTable from '../PanelTable/PanelTable';
import FilterData from './FilterData';
import OptionsDate from './OptionsDate';
import TotalDate from './TotalDate';

const PanelMenu = ({ onChange, option, totalSales, setFilter, filter }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TotalDate
          option={option}
          totalSales={totalSales}
        />
      </Grid>
      <Grid item xs={8}>
        <OptionsDate
          onChange={onChange}
          option={option}
        />
        <FilterData
          filter={filter}
          setFilter={setFilter}
        />
      </Grid>
    </Grid>
  );
}

export default PanelMenu;