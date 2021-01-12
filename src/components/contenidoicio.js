import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';


const TextoImagen = Styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 3rem;
    align-items: center;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 2fr;
        column-gap: 3rem;
    }

    p{
        line-height: 2;
        font-size: 1.9rem;
    }
`;

const ContenidoInicio = () => {

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
            nodes{
                titulo
                contenido
                imagen{
                fluid{
                    ...GatsbyDatoCmsFluid
                }
                }
            }
            }
        }
    `);

    //console.log(data);

    const { contenido, imagen, titulo } = data.allDatoCmsPagina.nodes[0];

    //console.log(data.allDatoCmsPagina.nodes[0])

    return (  
        <>
            
            <h2
                css={css`
                    text-align: center;
                    font-weight: bold;
                    margin-top: 4rem;
                    font-size: 4rem;
                `}
            >{titulo}</h2>

            <TextoImagen>
                <p>{contenido}</p>

                <img
                    css={css`
                        display: flex;
                        max-width: 300px;
                        max-height: 300px;
                        margin-top: 2rem;
                        

                        @media( min-width: 768px){
                            max-height: 400px;
                            max-width: 500px;
                            align-items: center;
                        }
                    `}
                    alt=""
                    src={imagen.fluid.srcSet} />
            </TextoImagen>
            
        </>
    );
}

export default ContenidoInicio;


/*
query{
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid{
                            srcSet
                        }
                    }
                }
            }
        }

*/