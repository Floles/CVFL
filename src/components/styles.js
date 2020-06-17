/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const ResponsiveWrapper = styled.div`
    display: block;
`;

export const Container = styled.div`
    width: 45%;
    padding: 2vw 4vw;
`;

export const ResponsiveContainer = styled.div`
    width: 100%;
    padding: 1vw;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex: 1;
    padding-left: 10vh;
    width: 65%;
`;

export const ResponsiveWorkContainer = styled.div`
    width: 100%;
    padding-left: 1vh;
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