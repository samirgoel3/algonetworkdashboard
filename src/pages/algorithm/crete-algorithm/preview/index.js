import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './mobile-preview.css';
import MobileProblemStatement from './MobileActionBar';
import MobileSolution from './MobileSolutionScreen';


export default function Preview() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#182A2B',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 10,
        maxHeight: '72vh',
        overflowY: 'scroll'
    }));

    return (
        <Grid container
            sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>

            <Grid item sx={{ width: 320, height: 20, backgroundColor: '#333', borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />


            <Grid item sx={{ flex: 1, width: 320, borderLeft: '1px solid #333', borderRight: '1px solid #333' }}>
                <MobileProblemStatement />
            
            </Grid>


            <Grid item sx={{ width: 320, height: 20, backgroundColor: '#333', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }} />

        </Grid>
    )
}