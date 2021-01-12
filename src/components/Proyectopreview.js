import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Styled from'@emotion/styled';
import { Link } from 'gatsby';

const Boton = Styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80, .85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    margin-right: 1rem;

    &:hover{
        background-color: #091015;
    }
`;

const ProyectoPreview = ({proyecto}) => {


    //console.log(proyecto);
    const { titulo, imagen, slug, subtitulo } = proyecto;
    
    return (  
        <>
            <div
                css={css`
                    border: 2px solid #e1e1e1;
                    margin-bottom: 1rem;
                    
                `}
            >
                <Image 
                    fluid={imagen.fluid}
                    
                />
                <div
                    css={css`
                        text-align: center;
                        padding: 2rem;
                        height: 25rem;
                    `}
                >
                    <h3>{titulo}</h3>
                    <p>{subtitulo}</p>

                    <Boton to={slug}>Ver Detalles</Boton>
                </div>
            </div>
        </>
    );
}

export default ProyectoPreview;