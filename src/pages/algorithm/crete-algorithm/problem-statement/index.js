import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import '../createalgorithm.css';
import HelperBox from './HelperBox';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../../states/actions';
import Colors from '../../../../themes/ColorsConst';
import Services from '../../../../network/services';
import { useEffect } from 'react';

const algorithmLevels = [
  { name: 'Easy', value: 1 },
  { name: 'Medium', value: 2 },
  { name: 'Hard', value: 3 },
  { name: 'Very Hard', value: 4 },
]

export default function ProblemStatement() {

  const stateData = useSelector(state => state)
  const dispatch = useDispatch()
  const [categories, setCategories] = React.useState([])
  

  const handleAddHelper = () => {
    dispatch(actions.AlgorithmActions.addHelper("", "", "", false))
  }

  const fetchAlgoCategories = async () => {
    try {
      const response = await Services.AlgoService.getAlgoCategories();
      if (response) { 
        setCategories(response.data.response) 
      }
      //  setCategories(response.data.response)
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => { fetchAlgoCategories() }, [])



  return (
    <Grid container direction={'column'} >
          <Grid container>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" >Select Category</InputLabel>
              <Select value={stateData.AlgorithmData.category_id} label="Select Category" sx={{ fontWeight: 700, textAlign: 'left', color: Colors.PRIMARY }} onChange={(e) => { dispatch(actions.AlgorithmActions.setAlgoCategory(e.target.value)) }}>
                {categories.map((e, i) => {
                  return (<MenuItem value={e._id} >
                    <Grid container direction={'row'} alignItems={'center'}>
                      <Grid
                        item
                        style={{ width: 30, height: 20, borderRadius: 5, backgroundColor: e.color, marginRight: 5 }}>
                      </Grid>
                      <Grid item>{e.name}</Grid>

                    </Grid>

                  </MenuItem>)
                })}
              </Select>
            </FormControl>
          </Grid>

          {/* Problem Statement and Level */}
          <Grid container direction={'row'} sx={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 3 }} spacing={0}>


            {/* // Problem statement */}
            <Grid item lg={9} >
              <TextField label={'Algorithm Header'}
                sx={{ display: 'flex', flexGrow: 1, marginRight: 3 }}
                InputProps={{ style: { fontWeight: 700 } }}
                maxRows={4}
                multiline
                value={stateData.AlgorithmData.problem_heading}
                onChange={(e) => { dispatch(actions.AlgorithmActions.setProblemHeading(e.target.value)) }} />
            </Grid>


            {/* // Algo-level */}
            <Grid item lg={3} >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Algorithm Level</InputLabel>
                <Select value={stateData.AlgorithmData.level} label="Algorithm L" sx={{ textAlign: 'left', fontWeight: 700 }} onChange={(e) => { dispatch(actions.AlgorithmActions.setLevel(e.target.value)) }}>
                  {algorithmLevels.map((e, i) => { return (<MenuItem value={e.value}>{e.name}</MenuItem>) })}
                </Select>
              </FormControl>
            </Grid>

          </Grid>

          {/* // description   */}
          <Grid container  >
            <Grid item sx={{ flexGrow: 1, marginTop: 3 }}>
              <TextField
                label={'Algorithm Description'}
                value={stateData.AlgorithmData.problem_description}
                sx={{ width: '100%' }}
                InputProps={{ style: { fontSize: 12 } }}
                onChange={(e) => { dispatch(actions.AlgorithmActions.setProblemDescription(e.target.value)) }}
                multiline />
            </Grid>
          </Grid>

          {/* helper box */}
          {stateData.AlgorithmData.problem_helper.map((e, i) => {
            return <HelperBox position={i} />
          })}


          <Button variant='dashed' sx={{ marginTop: 3, width: '100%' }} onClick={() => { handleAddHelper() }}>Add Helper</Button>
    </Grid>
  );
}


