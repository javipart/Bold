import { HelpOutline, TuneOutlined } from '@mui/icons-material';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
import TotalDate from './TotalDate';

const FilterData = () => {
  return (
    <Button sx={{ backgroundColor: '#FFFFFF' }} endIcon={<TuneOutlined />}>
      FILTRAR
    </Button>
  );
}

export default FilterData;