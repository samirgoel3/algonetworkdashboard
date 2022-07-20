import {combineReducers} from 'redux';
import ErrorDialogReducer from './ErrorDialogReducer';
import AuthReducer from './AuthenticationReducer';
import AlgorithmReducers from './AlgorithmReducers';

const reducers = combineReducers({errorDialogData:ErrorDialogReducer, AuthenticationData:AuthReducer, AlgorithmData:AlgorithmReducers})

export default reducers;
