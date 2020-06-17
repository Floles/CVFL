import React from 'react';
import {Wrapper, ResponsiveWrapper} from './styles';


const Layout = (props) => {
    
    return(
        props.width > 1024
            ? (
                <Wrapper>
                    {props.children} 
                </Wrapper>
            ) : (
                <ResponsiveWrapper>
                    {props.children}
                </ResponsiveWrapper>
            )
        
    );
};

export default Layout;