import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import variables from '../styles/components/spinner.module.scss';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex' }} className={variables.spinner}>
      <CircularProgress />
    </Box>
  );
}