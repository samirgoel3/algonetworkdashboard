import Grid from '@mui/material/Grid';
import * as React from 'react';
import '../createalgorithm.css';
import ExpandableView from './ExpandableView';
import { useSelector, useDispatch } from 'react-redux';





export default function Solutions() {

    const [languageOpenPosition, setLanguaueOpenPosition] = React.useState(-1)
    const stateData = useSelector(state => state)
    const dispatch = useDispatch()



    const handleLanguageBoxChangeOpen = (position) => {
        languageOpenPosition === position ?
            setLanguaueOpenPosition(-1) :
            setLanguaueOpenPosition(position)
    }



    return (
        <Grid container direction={'column'}>
            <Grid item>
                <div>
                    {
                        stateData.AlgorithmData.solution.map((item, index) => {
                            return (
                                <ExpandableView
                                    data={item}
                                    languagePosition={index}
                                    key={index}
                                    onParentClick={() => { handleLanguageBoxChangeOpen(index) }}
                                    expandedState={languageOpenPosition == index} />
                            )
                        })
                    }

                </div>
            </Grid>
        </Grid>
    );
}


