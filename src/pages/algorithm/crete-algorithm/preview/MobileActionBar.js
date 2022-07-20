import React, { Component } from 'react'
import { Grid, Typography } from '@mui/material'
import Colors from '../../../../themes/ColorsConst'
import MobileProblemScreen from './MobileProblemScreen'
import MobileSolutionScreen from './MobileSolutionScreen'
import './mobile-preview.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors'
import Icons from '../../../../constants/Icons'



export default function MobileActionBar() {
   

    return (
        <div style={{width:'100%', height:'100%', backgroundColor:Colors.PRIMARY, display:'flex', flexDirection:'column'}}>
            <div style={{width:'100%', height:40, backgroundColor:Colors.PRIMARY, display:'flex', boxShadow:'0px 1px 5px'}}>
                <Icons.KeyboardBackspaceIcon sx={{color:'#ffffff', paddingTop:1, paddingLeft:1, paddingRight:1}}/>
                <div style={{flex:1, height:'100%', position:'relative'}}>
                    <p style={{fontWeight:700, fontSize:14, color:'#fff', display:'block', textAlign:'left'}}>Array</p>
                    <p style={{backgroundColor:'red', borderRadius:7, paddingLeft:5, paddingRight:5, position:'absolute', left:0,  fontSize:10,  color:'#fff', display:'inline', textAlign:'left'}}>Level Hard</p>
                </div>
                <div style={{ height:'100%', paddingTop:6}}>
                    <p style={{backgroundColor:'#333',color:'white', fontSize:12, padding:6, borderRadius:13, display:'inline' }}>Prolem Statement</p>
                    <p style={{backgroundColor:'#333',color:'white', fontSize:12, padding:6, borderRadius:13, display:'inline', marginLeft:6, marginRight:6  }}>Solutions</p>
                </div>
            </div>
            <div style={{width:'100%', marginTop:5, overflowX:'scroll', height:'65vh'}}>
                <MobileProblemScreen/>
            </div>
        
        </div>
    )
}