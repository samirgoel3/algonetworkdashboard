import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import Algotabs from './Algotabs';
import './createalgorithm.css';
import Preview from './preview';
import CreateAlgorithm from './problem-statement';
import Solutions from './solutions';
import {useSelector, useDispatch} from 'react-redux';
import AlgoUtil from './AlgoUtil';
import Services from '../../../network/services';
import { actions } from '../../../states/actions';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowY: 'scroll',
    height:'76vh'
}));



export default function AlgoCreator() {
    const [selectedTab, setSelectedTab] = React.useState(0)

    const stateData = useSelector(state => state)
    const dispatch = useDispatch()


    const getSelectedTab = () => {
        let position = selectedTab;
        if (position === 0) {
            return <CreateAlgorithm />
        } if (position === 1) {
            return <Solutions />
        } if (position === 2) {
            return <Preview />
        } else {
            return null;
        }
    }

    const fetchCreateAlgoRithm = async ()=>{
        try {
            const response = await Services.AlgoService.getCreateAlgorithm(AlgoUtil.formatCreateAlgoData(stateData.AlgorithmData))
            if (response) {
              if(response.data.result !== 1){
                dispatch(actions.ErrorDialogActions.showError({header:"Something wen wrong", description:JSON.stringify(response.data.response)}))
                alert(JSON.stringify(response.data))
              }else{
                alert(JSON.stringify(response.data))
              }
            }else{
                alert("Problem in response")
            }
          } catch (e) {
            alert(e.message)
          }
    }


    return (

        <Grid container direction={'column'} sx={{ margin:0, marginTop:-1, padding:1}}>

            <Grid item >
                <Grid item >
                    <Typography variant='h5'>Create Algorithm</Typography>
                    <Typography variant='subtitle2`'>Please fill the following fields to create algorithm.</Typography>
                </Grid>
            </Grid>

            <Grid item>
                <Algotabs onTabChange={(data) => { setSelectedTab(data) }} />
            </Grid>

            <Grid item flex={'1'}>
                <Item > {getSelectedTab()}</Item>
            </Grid>
            <Grid item sx={{padding:1}}>
                <Button variant='contained' sx={{ width: '100%', }} onClick={()=>{
                    fetchCreateAlgoRithm()
                }}>Save</Button>
            </Grid>


        </Grid >
    )
}