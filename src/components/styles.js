/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: absolute;
`;

export const Container = styled.div`
    width: 45%;
    padding: 2vw 4vw;
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 15vh;
`;

export const Identity = styled.div`
    font-size: 1.2em;
`;

export const Title = styled.div`
    color: palevioletred;
`;

export const WorkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
`;

export const JobContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex: 1;
    width: 65%;
    padding-left: 10vh;
`;

export const Button = styled.button`
  background: ${props => props.primary ? "white" : "palevioletred"};
  color: ${props => props.primary ? "palevioletred" : "white"};
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
`;

export const Span = styled.span`
  color: palevioletred;
  font-size: 1em;
  font-Weight: 600;
  font-style: italic;
`;