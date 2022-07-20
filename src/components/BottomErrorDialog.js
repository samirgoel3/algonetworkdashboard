import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {actions} from '../states/actions';
import Constants from '../constants';

export default function BottomErrorDialog() {

  const stateData = useSelector(state => state)
  const dispatch = useDispatch()

  return (
      <React.Fragment >
          <Drawer
            anchor='bottom'
            open={stateData.errorDialogData.show}
            onClose={()=>{dispatch(actions.ErrorDialogActions.clearError())}}
            >
            <div>            
              {stateData.errorDialogData.description + Constants.EXAMPLE.some}
              {/* <Constants.ICONS.ErrorIcon/> */}
              </div>
          </Drawer>
        </React.Fragment>
  
  );
}
