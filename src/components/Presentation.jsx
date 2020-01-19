import React from 'react';
import styled from 'styled-components';
import moi from '../../assets/images/moi.jpeg'

const Wrapper = styled.div`
    margin: 5vw 7vw 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2vw 4vw;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 15vh;
`;

const Identity = styled.span`
    float: right;
    padding-top: 1vh;
    font-size: 1.2em;
`;

const SubIdentity = styled.span`
    float: right;
    font-size: 0.7em;
`;

const Presentation = () => {
    return(
        <Wrapper>
            <h1>
                <Image src={`${moi}`} alt="Florie Lesueur"/>
                <Identity>
                    Florie Lesueur<br/>
                    <SubIdentity>Développeur web FullStack JS<br/>React/Node</SubIdentity>
                </Identity>                
            </h1>
            <p>
                Développeur web fullStack JS depuis plus d'un an, j'ai exercé différents types de métiers : commerciale, chargée
                de marketing/communication et enfin développeur qui m'ont permis d'acquérir des compétences variées et
                complémentaires.<br/>
                L'alliance de ces savoirs-faire passés et actuels et de mon savoir-être font de moi un profil atypique.<br/>
                En apprentissage permanent, je continue à vouloir consolider mes acquis et monter en compétences avec la
                même motivation qu'au début pour exercer ce métier que j’ai toujours voulu faire.
            </p>
        </Wrapper>
    )
}

export default Presentation;