import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, TextField } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import '../createalgorithm.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../../states/actions';
import Icons from '../../../../constants/Icons';





export default function ExpandableView({ data, languagePosition, onParentClick = () => { }, expandedState }) {


    const [openSolutionPosition, setOpenSolutionPosition] = React.useState(-1)
    const stateData = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOnParentClick = () => {
        onParentClick()
    }

    const handleOnClickForSolutionTray = (index) => {
        openSolutionPosition === index ?
            setOpenSolutionPosition(-1) :
            setOpenSolutionPosition(index)
    }




    const handleOnAddHelperClickListener = () => {
        dispatch(actions.AlgorithmActions.addSolutionInLanguage(languagePosition))
    }



    return (
        <Accordion sx={{ backgroundColor: '#fff', borderRadius: 1, marginTop: 1 }} elevation={0} expanded={expandedState} onChange={() => { handleOnParentClick() }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={data.language} >
                <Grid container>
                    <Typography sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 700 }}>{data.language}</Typography>
                </Grid>

            </AccordionSummary>
            <AccordionDetails>
                {data.solutions.map((e, i) => {
                    return (
                        <Accordion expanded={(openSolutionPosition === i)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={i}
                                onClick={() => { handleOnClickForSolutionTray(i) }}>
                                {'Solution' + (i + 1)}
                                <Icons.DeleteForeverIcon onClick={()=>{
                                    dispatch(actions.AlgorithmActions.deleteSolutionForLanguage(languagePosition, i))
                                }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    variant='filled'
                                    maxRows={8}
                                    value={e.code}
                                    multiline sx={{ width: '100%' }}
                                    onChange={(e) => {
                                        dispatch(actions.AlgorithmActions.editSolutionForLanguage(e.target.value, languagePosition, i))
                                    }}
                                    InputProps={{ disableUnderline: true, style: { fontSize: 13, paddingTop: 8 } }} />
                            </AccordionDetails>
                        </Accordion>
                    )
                })}

                {<Button
                    variant='dashed'
                    onClick={() => { handleOnAddHelperClickListener() }}
                    sx={{ fontSize: 9, width: '100%', marginTop: 2 }}
                >Add {data.language} Solution</Button>}

            </AccordionDetails>
        </Accordion>
    );
}


