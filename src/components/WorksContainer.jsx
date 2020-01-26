/* eslint-disable react/no-array-index-key */
import React from 'react';
import { WorkContainer } from './styles';
import Jobs from './Jobs';



const WorksContainer = (props) => {
    
    const {jobs} = props

    return(
        <WorkContainer>
            {
                props.jobs.map((job, key) => {
                    
                    return (
                        <Jobs
                            key={key}
                            details={job}
                        />
                    )
                })
            }
        </WorkContainer>
    );
};

export default WorksContainer;