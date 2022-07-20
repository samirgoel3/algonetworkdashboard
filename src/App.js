import React from 'react'
import './App.css';
import Users from './pages/users';
import Notification from './pages/notifications';
import Settings from './pages/settings';
import Login from './pages/login/LoginSecond';
import SignUp from './pages/signup';
import CreateAlgocategories from './pages/algocategories/CreateAlgoCategory';
import ListAlgocategories from './pages/algocategories/ListAlgoCategories';
import CreateAlgorithm from './pages/algorithm/crete-algorithm';
import AlgorithmList from './pages/algorithm/algorithm-list/AlgorithmList';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Dashboard from './pages/dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoutes from './routes/PublicRoutes';
import RouteName from './routes/Routesname';
import { Provider } from 'react-redux';
import {store} from './states';
import LinearProgressBar from './components/LinearProgressBar';
import BottomErrorDialog from './components/BottomErrorDialog';
import {useSelector} from 'react-redux';
import { ThemeProvider } from '@mui/material';
import ThemingComponentList from './dev/ThemingComponentList';
import Themes from './themes';




const isloggedIn = localStorage.getItem('token')?true:false;



function App() {

  const getProvider = ()=>{
    return <Provider store={store}>
    <BrowserRouter>
    {/* <LinearProgressBar/> */}
    <BottomErrorDialog/>
    {/* <Nav isLoggedin={isloggedIn}/> */}

    <Routes>
      
      // public Routes 
      <Route element={<PublicRoutes isAuthenticated={isloggedIn}/>}>
       <Route path={RouteName.LOGIN}  exact element={<Login/>} />
       <Route path={RouteName.SIGNUP} element={ <SignUp/>}/>
      </Route>
       

      // Private Routes  
        <Route element={<ProtectedRoute isAuthenticated={isloggedIn} />}>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path={RouteName.DASHBOARD} exact element={<Dashboard/>} />
          <Route path={RouteName.NOTIFICATIONS} element={<Notification />} />
          <Route path={RouteName.SETTINGS} element={<Settings />} />
          <Route path={RouteName.USER} element={<Users />} />
          <Route path={RouteName.CREATE_ALGO_CATEGORIES} element={<CreateAlgocategories />} />
          <Route path={RouteName.LIST_CATEGORIES} element={<ListAlgocategories />} />
          <Route path={RouteName.CREATE_ALGORITHM} element={<CreateAlgorithm />} />
          <Route path={RouteName.LIST_ALGORITHM} element={<AlgorithmList />} />
        </Route>

        // when no route found
        <Route path="*" element={<> Page not found</>} />
   
   </Routes>
   
    </BrowserRouter>
    </Provider>
  }
  

  return (
    <ThemeProvider theme={Themes.DarkGreenTheme}>
    {getProvider()}
    {/* <ThemingComponentList/> */}
   </ThemeProvider>
  );
}

export default App;
