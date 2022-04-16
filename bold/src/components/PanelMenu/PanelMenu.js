import { HelpOutline } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
import PanelTable from '../PanelTable/PanelTable';
import FilterData from './FilterData';
import OptionsDate from './OptionsDate';
import TotalDate from './TotalDate';

const PanelMenu = ({ onChange, option, totalSales, setFilter, filter, formatterField, loading }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TotalDate
          option={option}
          totalSales={totalSales}
          formatterField={formatterField}
          loading={loading}
        />
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <OptionsDate
              onChange={onChange}
              option={option}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'end' }}>
            <FilterData
              filter={filter}
              setFilter={setFilter}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PanelMenu;