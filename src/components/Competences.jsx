/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skill from './Skill';
import { WorkContainer } from './styles';

const Competences = (props) => {
    
    return(
        <WorkContainer>
            <Skill
                kls={props.skills.knowledges}
                khs={props.skills.knowhow}
                hobbies={props.skills.hobbies}
            />
        </WorkContainer>
    );
};

export default Competences;