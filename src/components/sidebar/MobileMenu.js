import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Constants from '../../constants';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import RouteName from '../../routes/Routesname';
import { Grid } from '@mui/material';


export default function TemporaryDrawer() {

  const anchorForDrawer = 'left'; 
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const routesData = [
    {
      path: RouteName.DASHBOARD,
      name: "Dashboard",
      icon: <Constants.ICONS.DashboardIcon />,
    },
    {
      path: RouteName.USER,
      name: "Users",
      icon: <Constants.ICONS.PersonIcon />,
    },
    {
      path: RouteName.LIST_CATEGORIES,
      name: "List Algo Categories",
      icon: <Constants.ICONS.GridViewIcon />,
    },
    {
      path: RouteName.CREATE_ALGO_CATEGORIES,
      name: "CreateAlgo Categories",
      icon: <Constants.ICONS.GridViewIcon />,
    },
  ]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      className='mobile-menu-drawer'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <div style={{ display:'flex', flexDirection:'row', alignItems:'center', padding:15, justifyContent:'space-between'}}>
        <div className='menu_logo'> Algo-Network</div>
        <Constants.ICONS.CloseIcon style={{color:'#fff', width:35, height:35}} onClick={()=>{ toggleDrawer(anchor, false) }}/>
      </div>
      
      <List>
        {routesData.map((element, index) => (
          <ListItem key={index} disablePadding className='mobile-menu-item'>
            <ListItemButton onClick={()=>{navigate(element.path)}}>
              <ListItemIcon sx={{color:'#fff'}}>
                {element.icon}
              </ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <div>
      {
        <React.Fragment >
          <Constants.ICONS.MenuIcon onClick={toggleDrawer(anchorForDrawer, true)}  className='mobile-menu-icon'/>
          <Drawer
            anchor={anchorForDrawer}
            open={state[anchorForDrawer]}
            onClose={toggleDrawer(anchorForDrawer, false)}
          >
            {list(anchorForDrawer)}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}

