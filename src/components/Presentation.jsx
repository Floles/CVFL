import React from 'react';
import moi from '../../assets/images/moi.jpeg';
import {Container, Image, Identity, Title, Span} from './styles';

const Presentation = (props) => {
    
    const {basics} = props;

    return(
        <Container>
            <h1>
                <Image src={`${moi}`} alt="Florie Lesueur"/>
                <Identity>
                    {basics.name}
                </Identity>       
            </h1>
            <h2><Title>{basics.label}</Title></h2>
            <p>{basics.summary}</p>
            <p><Span>Portable :</Span> {basics.phone}</p>
            <p><Span>Email :</Span> {basics.email}</p>
            <p>
                Mon profil&nbsp;
                <a href={basics.website} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p>{basics.location.postalCode} {basics.location.city} {basics.location.countryCode}</p>
        </Container>
    );
};

export default Presentation;