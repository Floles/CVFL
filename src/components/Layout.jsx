import React from 'react';
import {Wrapper} from './styles';


const Layout = (props) => {

    return(
        <Wrapper className={Wrapper}>
            {props.children} 
        </Wrapper>
    );
};

export default Layout;