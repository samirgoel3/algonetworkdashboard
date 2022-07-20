
const onLogin = (userName, email, userImage, token)=>{
    return async (dispatch) =>{

        localStorage.setItem('user_name',userName);
        localStorage.setItem('user_image',userImage);
        localStorage.setItem('email',email);
        localStorage.setItem('token',token);
        dispatch({
            type:'login',
            payload:{
                user_name:userName,
                user_image:userImage,
                email:email,
                token:token
            }
        })
    }
}

const onSignUp = (userName, email, userImage, token)=>{
    return async (dispatch) =>{
         localStorage.setItem('user_name',userName);
         localStorage.setItem('user_image',userImage);
         localStorage.setItem('email',email);
         localStorage.setItem('token',token);
        dispatch({
            type:'signup',
            payload:{
                user_name:userName,
                user_image:userImage,
                email:email,
                token:token
            }
        })
    }
}

const onSignOut = ()=>{
    return async (dispatch) =>{
        localStorage.setItem('token','');
        dispatch({
            type:'sign-out',
            payload:{
                user_name:'',
                user_image:'',
                email:'',
                token:''
            }
        })
    }
}

const checkLogin = () =>{
    return async (dispatch)=>{
        const data = localStorage.getItem('token')
        dispatch({
            type:'check-login',
            payload:{
                token:data?data:''
            }
        })
    }
}


export default {onLogin, onSignUp, onSignOut, checkLogin}
