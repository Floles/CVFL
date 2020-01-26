import React from 'react';
import styled from 'styled-components';
import moi from '../../assets/images/moi.jpeg'
import {Container, Image, Identity} from './styles';

const Presentation = (props) => {
    
    const {basics} = props

    return(
        <Container>
            <h1>
                <Image src={`${moi}`} alt="Florie Lesueur"/>
                <Identity>
                    {basics.name}
                </Identity>       
            </h1>
            <h2>{basics.label}</h2>
            <p>{basics.summary}</p>
            <p>{basics.phone}</p>
            <p>{basics.website}</p>
            <p>{basics.location.postalCode} {basics.location.city} {basics.location.countryCode}</p>
        </Container>
    );
};

export default Presentation;