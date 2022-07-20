import React from 'react';
import './login-second.css'
import BGVideo from '../../assets/video/algo-video.mp4';
import {useDispatch} from 'react-redux';
import {actions} from '../../states/actions';
import { useNavigate } from 'react-router-dom';
import RouteName from '../../routes/Routesname';



function Login({props}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <div className="split-screen">
        <div className='left'>
            <section className='copy'>
                <h1>Algo Js Network </h1>
                <p className='not-line'>Not just a <strong className='logic-keyword'>LOGIC</strong></p>
            </section>
            <div className='video-container'>
            <video id='video-box' autoPlay muted loop >
                    <source src={BGVideo} type='video/mp4'/>
            </video>
            </div>

        </div>

        <div className='right'>
            <div className='form'>
                
            <section className='copy'>
                <h2>Admin Login</h2>
            </section>
    

        <div className='input-container email'> 
         <label >Email Address </label>
         <input className='input' placeholder={'Enter your email'}></input>
        </div>

        <div className='input-container password'> 
         <label >Your password </label>
         <input className='input' placeholder={'must be atleast 6 characters.'} ></input>
        </div>



    

        <button  className='login-btn' onClick={()=>{
             dispatch(actions.AuthenticationActions.onLogin("Admin name", "Admin email", "Admin image", "token"))  
             window.location.reload(false)
            //  dispatch(actions.ErrorDialogActions.showNoDataFromApi())  
             }}>Login</button>

            </div>

         </div>
    </div>
  );
}

export default Login;
