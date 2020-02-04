import React from 'react';
import { WorkContainer, JobContainer, Span } from './styles';

const Education = (props) => {
    
    const {education} = props;

    return(
        <WorkContainer>
            <JobContainer>
                {
                    education.map((edu, key) => {
                        return (
                            <div key={key}>
                                <p><Span>Ecole :</Span> {edu.institution}</p>
                                <p><Span>Diplôme :</Span> {edu.studyType}</p>
                                <p><Span>Date d'obtention :</Span> {edu.endDate}</p>
                            </div>
                        );
                    })
                }
            </JobContainer>
        </WorkContainer>
    );
};

export default Education;