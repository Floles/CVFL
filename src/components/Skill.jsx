import React from 'react';
import {JobContainer} from './styles'

const Skill = (props) => {

    return(
        <JobContainer>
            <h4>Compétences techniques : </h4>
            <ul>
                {
                    props.kls.map((kl, key) => {
                        return (
                            <li key={key}>
                                {kl}
                            </li>
                        )
                    })
                } 
            </ul>
        </JobContainer>
    );
};

export default Skill;