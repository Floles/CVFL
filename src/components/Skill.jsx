import React from 'react';
import {Button} from './styles'

const Skill = (props) => {

    return(
        <>
            <h4>Competences techniques : </h4>
            <div>
                {
                    props.kls.map((kl, key) => {
                        return (
                            <Button key={key}>
                                {kl}
                            </Button>
                        )
                    })
                } 
            </div>
            <h4>Competences fonctionnelles : </h4>
            <div>
                {
                    Object.keys(props.khs).map((kh, key) => {
                        return(
                            <>
                                <p style={{textTransform: 'capitalize'}}><b>{kh} : </b></p>
                                <ul>
                                    {
                                        props.khs[kh].map(k =>(
                                            <li>{k}</li>
                                        ))
                                    }
                                </ul>
                            </>
                        )
                    })
                }
            </div>
            <h4>Hobbies : </h4>
            <div>
                {
                    props.hobbies.map((hobbie, hkey) => (
                        <Button key={hkey}>
                            {hobbie}
                        </Button>
                    ))
                }
            </div>
        </>
    );
};

export default Skill;