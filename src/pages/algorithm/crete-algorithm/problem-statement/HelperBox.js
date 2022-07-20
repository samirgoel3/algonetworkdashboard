import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { fontSize } from '@mui/system';
import * as React from 'react';
import Constants from '../../../../constants';
import '../createalgorithm.css';
import Colors from '../../../../themes/ColorsConst';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../../states/actions';


const colorsList = [
    {
        name: 'No Background',
        value: ""
    },
    {
        name: 'Green Light',
        value: "#213837"
    },
    {
        name: 'Green',
        value: "#C8E6C9"
    },
    {
        name: 'teal',
        value: "#B2DFDB"
    },
    {
        name: 'Red',
        value: "#FFCDD2"
    },
    {
        name: 'Lime',
        value: "#F0F4C3"
    }
];


export default function HelperBox({ position }) {
    const stateData = useSelector(state => state)
    const dispatch = useDispatch()


    return (
        <Grid container direction={'column'} sx={{ marginTop: 2, border: '0.5px dashed #333333', backgroundColor: stateData.AlgorithmData.problem_helper[position].backgroundColor, padding: 1, borderRadius: 2, padding: 3 }}>
            <Grid container spacing={1} direction={'row'} sx={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }} >


                {/* // Header */}
                <Grid item flex={1}>
                    <TextField
                        label={'Enter Header'}
                        sx={{ display: 'flex', flexGrow: 1 }}
                        InputProps={{ style: { fontWeight: 700 } }}
                        maxRows={4}
                        multiline
                        value={stateData.AlgorithmData.problem_helper[position].heading}
                        onChange={(e) => { dispatch(actions.AlgorithmActions.editHelperHeading(e.target.value, position)) }} />
                </Grid>


                {/* // Background Color */}
                <Grid item lg={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >Background Color</InputLabel>
                        <Select
                            label="Background C"
                            sx={{fontWeight:700, textAlign:'left'}}
                            value={stateData.AlgorithmData.problem_helper[position].backgroundColor}
                            onChange={(e) => { dispatch(actions.AlgorithmActions.editHelperColor(e.target.value, position)) }}>
                            {colorsList.map((e, i) => {
                                return (
                                    <MenuItem value={e.value}>{e.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Collapsable */}
                <Grid item  >
                    <div className='collapsable-container'>
                        <Typography sx={{ flexGrow: 1, textAlign: 'flex-start', paddingLeft: 2, fontWeight:700 }} >Collapsable</Typography>
                        <Switch
                            label={'Something'}
                            defaultChecked={stateData.AlgorithmData.problem_helper[position].collapsable} 
                            onChange={(e)=>{ dispatch(actions.AlgorithmActions.editHelperCollapsable(!stateData.AlgorithmData.problem_helper[position].collapsable, position))}}
                            />
                    </div>
                </Grid>

                {/* Delete button */}
                <Grid item  >
                    <div className='delete-container'>
                        <Constants.ICONS.DeleteForeverIcon sx={{ width: 30, height: 30 }}
                            onClick={() => { dispatch(actions.AlgorithmActions.removeHelper(position)) }} />
                    </div>
                </Grid>
            </Grid>

            {/* // description   */}
            <Grid container  >
                <Grid item sx={{ flexGrow: 1, marginTop: 3 }}>
                    <TextField label={'Header Description'}
                        sx={{ width: '100%' }}
                        InputProps={{ style: { fontSize: 10 } }}
                        value={stateData.AlgorithmData.problem_helper[position].description}
                        onChange={(e) => { dispatch(actions.AlgorithmActions.editHelperDescription(e.target.value, position)) }}
                        multiline maxRows={6} />
                </Grid>
            </Grid>

        </Grid>
    );
}


