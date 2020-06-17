import React from 'react';
import { WorkContainer, Span, ResponsiveWorkContainer } from './styles';

const Education = (props) => {
    
    const {education, width} = props;
    const educ = (
        <>
            
            {
                education.map((edu, key) => {
                    return (
                        <div key={key}>
                            <p><Span>Ecole :</Span> {edu.institution}</p>
                            <p><Span>Diplome :</Span> {edu.studyType}</p>
                            <p><Span>Obtention :</Span> {edu.endDate}</p>
                        </div>
                    );
                })
            }
            
        </>
    );

    return(
        width > 1024
            ? (
                <WorkContainer>
                    {educ}
                </WorkContainer>
            ) : (
                <ResponsiveWorkContainer>
                    {educ}
                </ResponsiveWorkContainer>
            )
    );
};

export default Education;