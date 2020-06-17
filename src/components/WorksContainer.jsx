/* eslint-disable react/no-array-index-key */
import React from 'react';
import { WorkContainer, ResponsiveWorkContainer } from './styles';
import Jobs from './Jobs';

const WorksContainer = (props) => {
    
    const {jobs, width} = props;
    const work = (
        jobs.map((job, key) => {
                    
            return (
                <>
                    <Jobs
                        key={key}
                        details={job}
                    />
                </>
            );
        })
    );

    return(
        width > 1024
            ? (
                <WorkContainer>
                    {work}
                </WorkContainer>
            ) : (
                <ResponsiveWorkContainer>
                    {work}
                </ResponsiveWorkContainer>
            )
        
    );
};

export default WorksContainer;