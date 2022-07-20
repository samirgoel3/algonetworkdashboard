import React, { Component } from 'react'
import { Paper, Grid, Typography, Button } from '@mui/material'

export default function(){
    return(
        <Paper style={{margin:20, padding:20}} variant='outlined' >
        <Grid container direction={'column'}>
          <Typography variant='body1'> This is text - with body1 variant</Typography>
          <Typography variant='body2'> This is text - with body2 variant</Typography>
          <Typography variant='button'> This is text - with buton variant</Typography>
          <Typography variant='caption'> This is text - with caption variant</Typography>
          <Typography variant='inherit'> This is text - with inherit variant</Typography>
          <Typography variant='subtitle1'> This is text - with subtitle1 variant</Typography>
          <Typography variant='subtitle2'> This is text - with subtitle2 variant</Typography>
          <Typography variant='h2'> This is text - with h2 variant</Typography>
          <Typography variant='h3'> This is text - with h2 variant</Typography>
          <Button variant='contained'> Contained button</Button>
          <Button variant='outlined'> outlined button</Button>
          <Button variant='text'> Text button</Button>
          <Button variant='dashed'> Text button</Button>
        </Grid>
      </Paper>
    )
}