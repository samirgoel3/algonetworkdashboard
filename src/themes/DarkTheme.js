import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({

  

  components:{
      MuiButton:{
          styleOverrides:{
              contained:{
                  backgroundColor:'#ffffff!important',
                  textTransform:"capitalize",
                  color:'#333333!important'
              },
              outlined:{
                  border:'1px solid #333333!important',
                  textTransform:"capitalize",
                  color:'#333333!important',
                  fontWeight:700
              },
              text:{
                  textTransform:"capitalize",
                  color:'#333333!important',
                  fontWeight:700
              },
              dashed:{
                border:'1px dashed #182A2B!important',
                textTransform:"capitalize",
                color:'#333333!important',
                fontWeight:700
            }
          }
      },
      
  }
})

