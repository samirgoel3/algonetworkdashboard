import * as React from 'react';
import './createalgo.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AlgoStatusTabs from './AlgoStatusTabs';
import AlgoListTable from './AlgoListTable';
import { Typography } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  paddingBottom:20,
  borderRadius:20,
  color: theme.palette.text.secondary,
  width:'100%',
}));




function ListAlgoCategories() {
  return (
    <Box sx={{ flexGrow: 1, width:'100%', height:'96vh', overflowY:'scroll', padding:2 }}>
    <Grid container className='heading-container' marginBottom={4}>
      <Grid item >
        <Typography variant='h4' >Algo Categories</Typography>
        <Typography variant='subtitle2'>These are the categories for your algorithm</Typography>
      </Grid>
    </Grid>


    <Item>
    <Grid container direction={'column'} style={{width:'100%', overflowX:'scroll'}}>
      <AlgoStatusTabs/>  
      <AlgoListTable/>
    </Grid>
    </Item>
      
  </Box>
  );
}

export default ListAlgoCategories;
