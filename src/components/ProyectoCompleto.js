import React from 'react';
import Image from 'gatsby-image';
import Styled from '@emotion/styled';
import { Link } from 'gatsby';

const EstiloDiv = Styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3.5rem;
`;

const ProyectoCompleto = ({proyecto}) => {
    const { titulo, contenido, imagen, link } = proyecto;

    return (  
        <>
            <EstiloDiv>
                <div>
                    <h1>{titulo}</h1>
                    <p>{contenido}</p>
                    <Link to={link}>Enlace al repositorio de Github:</Link>

                </div>

                <Image 
                    fluid={imagen.fluid}
                />
                
            </EstiloDiv>
        </>
    );
}

export default ProyectoCompleto;