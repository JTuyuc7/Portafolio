import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';

const Estilodiv = Styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    font-size: 2.7rem;
    line-height: 4.7rem;
    font-weight: normal;
    margin-bottom: 2rem;
    
    @media( min-width: 768px){
        display: grid;
        grid-template-columns: 3fr 1fr;
        column-gap: 3rem;
    }
`;

const SobreMi = () => {

    const datos = useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter: {slug: {eq: "sobremi"}}){
                nodes{
                    contenido
                    titulo
                    cv{
                        url
                    }
                    imagen{
                        fluid{
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    const { contenido, imagen, cv, titulo } = datos.allDatoCmsPagina.nodes[0];

    return (
        <>
            <Layout>
                <h2
                    css={css`
                        margin-top: 3rem;
                        text-align: center;
                        font-size: 3.5rem;
                    `}
                >{titulo}</h2>

                <Estilodiv>
                    <div>
                        <p>{contenido}</p>
                        <Link to={cv.url} target="_blank">MI CV</Link>
                        

                    </div>
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
                </Estilodiv>
            </Layout>
        </>
    );
}

export default SobreMi;