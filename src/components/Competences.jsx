/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skill from './Skill';
import { WorkContainer, ResponsiveWorkContainer } from './styles';

const Competences = (props) => {

    const skills = (
        <>
            <Skill
                kls={props.skills.knowledges}
                khs={props.skills.knowhow}
                hobbies={props.skills.hobbies}
            />
        </>
    );
    
    return(
        props.width > 1024
            ? (
                <WorkContainer>
                    {skills}
                </WorkContainer>
            ) : (
                <ResponsiveWorkContainer>
                    {skills}
                </ResponsiveWorkContainer>
            )
        
    );
};

export default Competences;