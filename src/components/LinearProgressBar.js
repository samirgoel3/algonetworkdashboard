import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearProgressBar() {


  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={77}  />
    </Box>
  );
}
