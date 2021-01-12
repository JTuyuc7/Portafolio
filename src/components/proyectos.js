import React from 'react';
import { graphql } from 'gatsby';
import Layout from './Layout';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Styled from '@emotion/styled';

const LinkGithub = Styled(Link)`
    font-size: 2.5rem;
    text-decoration: none;
    color: #000;
    margin-bottom: 4rem;
    font-weight: bold;

    &:hover{
        color: #415462;
    }
`;

export const query = graphql`
    query($slug: String!){
        allDatoCmsProyecto(filter: { slug: { eq: $slug}}){
            nodes{
                titulo
                contenido
                link
                imagen{
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const ProyectosTemplate = ({data: {allDatoCmsProyecto: { nodes }}}) => {

    const { contenido, titulo, imagen, link } = nodes[0];


    return (  
        <>  
            <Layout>
                <main
                    css={css`
                        width: 90%;
                        margin: 0 auto;
                        max-width: 1200px;
                        margin-bottom: 4rem;
                    `}
                >
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 4rem;
                        `}
                    >{titulo}</h1>
                    <p
                        css={css`
                            line-height: 3.1rem;
                        `}
                    >{contenido}</p>

                    <LinkGithub to={link}>Enlace al Repositorio Github</LinkGithub>

                    <Image  
                        fluid={imagen.fluid}
                        fadeIn="soft"
                    />
                </main>
            </Layout>
        </>
    );
}

export default ProyectosTemplate;