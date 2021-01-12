import React from 'react';
import { css } from '@emotion/core';
import NavFooter from './NavFooter';

const Footer = () => {
    return (
        <>  
            <footer
                css={css`
                    background-color: #2196f3;
                    padding: 0.2rem;

                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: auto;
                        max-width: 90%;
                        
                    `}
                >
                <h1>Conoce más sobre mi</h1>
                    <NavFooter  />
                </div>
            </footer>
        </>
    );
}

export default Footer;