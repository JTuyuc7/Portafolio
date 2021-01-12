import React from 'react';
import Navegacion from './Nav';
import { css } from '@emotion/core';
import Styled from '@emotion/styled';
import { Link } from 'gatsby';

const Botonhome = Styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;

    &:hover{
        cursor: pointer;
    }
`;

const Header = () => {
    return (  
        <>
            <header
                css={css`
                    background-color: #2196f3;
                    padding: 1.5rem;
                    position: relative;
                    left: 0;
                    right: 0;
                    top: 0;
                `}
            >
                <div 
                    css={css`
                        max-width: 1200px;
                        margin: auto;

                        @media( min-width: 768px){
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            
                        }
                    `}
                >
                    <Botonhome
                        to={'/'}
                    >
                        <h1>Jaime Tuyuc</h1>
                    </Botonhome>

                    <Navegacion />
                </div>
            </header>
        </>
    );
}

export default Header;