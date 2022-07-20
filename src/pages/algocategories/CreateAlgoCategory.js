import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import './createalgo.css';
import Services from '../../network/services';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 10
}));




export default function AlgoCategories() {

  const [inputs, setInputs] = React.useState({ name: "", color: "", icon: "" })

  const handleInputs = (key, value) => {
    setInputs({ ...inputs, [key]: value })
  }


  const handleCreateCategoryClick = async () => {
    try {
      const response = await Services.AlgoService.getCreateAlgoCategories(inputs.name, inputs.color, inputs.icon);
      if (response) {
        // setCategories(response.data.response)
        alert(JSON.stringify(response.data))
      }
      //  setCategories(response.data.response)
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <Paper variant='box' sx={{ flexGrow: 1, padding: 3 }}>

      <Grid container className='heading-container' style={{ marginBottom: 24 }}>
        <Grid item >
          <Typography variant='h4'>Create Algo category</Typography>
          <Typography variant='subtitle2'>Please Enter fields below to create algo category</Typography>
        </Grid>
        <Grid item ></Grid>
      </Grid>




      <Item>
        <Grid container direction={'column'}>
          <TextField label={'Category name'} style={{ marginTop: 20 }} onChange={(e) => { handleInputs('name', e.target.value) }} />
          <TextField label={'Category Color'} style={{ marginTop: 20 }} onChange={(e) => { handleInputs('color', e.target.value) }} />
          <TextField label={'Icon Url'} style={{ marginTop: 20 }} onChange={(e) => { handleInputs('icon', e.target.value) }} />
          <Button variant="contained" style={{ marginTop: 20, maxWidth: 200, alignSelf: 'flex-end' }} onClick={() => { handleCreateCategoryClick() }}>Create Category</Button>
        </Grid>
      </Item>



    </Paper>
  );
}

