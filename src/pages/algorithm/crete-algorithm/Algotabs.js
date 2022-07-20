import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function Algotabs({onTabChange = ()=>{} }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Box sx={{  marginBottom:2 }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Problem Statement"   sx={{ textTransform:'capitalize', fontWeight:700}} />
          <Tab label="Solutions"  sx={{ textTransform:'capitalize', fontWeight:700}} />
          <Tab label="Algo Preview"  sx={{ textTransform:'capitalize', fontWeight:700}} />
        </Tabs>
      </Box>
    
    </Box>
  );
}
