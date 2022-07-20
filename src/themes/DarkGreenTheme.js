import { createTheme } from "@mui/material";
import Colors from "./ColorsConst";

export const DarkGreenTheme = createTheme({

    palette: {
        primary: {
            main: Colors.SECONDRY
        }
    },

    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: Colors.SECONDRY,
                    textTransform: "capitalize",
                    color: '#fff'
                },
                outlined: {
                    border: '1px solid #333333!important',
                    textTransform: "capitalize",
                    color: Colors.PRIMARY,
                    fontWeight: 700
                },
                text: {
                    textTransform: "capitalize",
                    color: '#333333!important',
                    fontWeight: 700
                },
                dashed: {
                    border: '1px dashed #182A2B!important',
                    textTransform: "capitalize",
                    color: '#333333!important',
                    fontWeight: 700
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.MuiAccordion-root:before": {
                        backgroundColor: Colors.PRIMARY
                    }
                }
            }
        }
    },


    typography: {
        h4: {
            color: Colors.SECONDRY,
        },
        subtitle2: {
            color: Colors.PRIMARY
        }
    }

})