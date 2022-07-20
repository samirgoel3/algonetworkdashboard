import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../../constants/Icons';



export default function MobileProblemScreen() {

    const dispatch = useDispatch();
    const stateData = useSelector(state => state)

    const mock = [
        {
            heading: "Problem statement goes here",
            description: "some description about content will goes here accordingly ",
            backgroundColor: "",
            collapsable: false
        },
        {
            heading: "Problem statement goes here",
            description: "some description about content will goes here accordingly ",
            backgroundColor: "",
            collapsable: false
        }, {
            heading: "Problem statement goes here",
            description: "some description about content will goes here accordingly ",
            backgroundColor: "",
            collapsable: true
        }, {
            heading: "Problem statement goes here",
            description: "some description about content will goes here accordingly ",
            backgroundColor: "",
            collapsable: true
        }, {
            heading: "Problem statement goes here",
            description: "some description about content will goes here accordingly ",
            backgroundColor: "",
            collapsable: true
        },
    ]


    return (
        <div >
            <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Typography textAlign={'left'} sx={{ color: '#fff', fontSize: 14, fontWeight: 700, alignSelf: 'left' }}>{stateData.AlgorithmData.problem_heading}</Typography>
                <Typography textAlign={'left'} fontSize={12} color={'white'}>
                    {stateData.AlgorithmData.problem_description}
                </Typography>
            </div>

            {stateData.AlgorithmData.problem_helper.map((e, i) => {
                return (
                    <div style={{ padding: 10, paddingRight: 10, backgroundColor: e.backgroundColor, borderRadius: 5, margin: 5 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography textAlign={'left'} flex={1} sx={{ color: '#fff', fontSize: 14, fontWeight: 700, alignSelf: 'left' }}>{e.heading}</Typography>
                            {e.collapsable ? <Icons.ArrowDropDownIcon sx={{ color: 'white' }} /> : null}
                        </div>
                        {/* <div style={{textAlign:'left'}}
                            dangerouslySetInnerHTML={{__html: e.description}} /> */}
                        <Typography textAlign={'left'} fontSize={12} color={'white'}>
                            {e.description}
                        </Typography>
                    </div>
                )
            })}
        </div>
    )
}