import { Grid, Paper } from '@mui/material';
import React from 'react';

function AlgorithmList() {
  return (
    <Grid container direction={'column'}>
      <Grid item>
        <Paper> Box 1</Paper>
      </Grid>
      <Grid item flex={'1'}> <Paper> Box 2</Paper> </Grid>
      <Grid item><Paper> Box 3</Paper></Grid>

    </Grid>
  );
}

export default AlgorithmList;
