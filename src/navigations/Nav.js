import { Button } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import { actions } from '../states/actions';
import { useDispatch } from 'react-redux';
import './nav.css'

function Nav({isLoggedin}) {
  
  const dispatch = useDispatch();
  const logoutStyle = {color:'white' ,textDecoration: 'none'}

  const getNavigation = ()=>{
    return <nav>
    <h3>Logo</h3>
      <ul className='navigation-ul'>
        <Link className='navstyle' to="/users">Users</Link> 
        <Link className='navstyle'  to="/notifications">Notifications</Link>
        <Link className='navstyle' to="/settings">Settings</Link>
        <span className='logoutStyle'  onClick={()=>{
          dispatch(actions.AuthenticationActions.onSignOut())
          window.location.reload(false)
        }}>Logout</span>
        </ul>
    </nav>
  }


  return (    
    <div>{isLoggedin ? getNavigation() : null}</div>
  )
}

export default Nav;
