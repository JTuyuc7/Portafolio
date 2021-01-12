import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
//import ImagenMia from './imagenmia';

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;

const TextImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63, .75 ), rgba(34,49,63, .85 ));
    color: #FFF;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;

    @media(min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    
    h1{
        font-size: 3rem;
        margin-top: 6rem;
        font-weight: bold;

        @media( min-width: 720px){
            font-size: 7.5rem;
            align-items: center;
            margin-right: 4rem;
            margin-left: 4rem;
        }
    }

    p{
        font-size: 2.8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        text-align: center;
        @media( min-width: 720px){
            align-items: center;
            font-size: 3rem;
            margin-right: 3.5rem;
            margin-left: 6rem;
        }
    }

`;

const Imagen = () => {

    const { image } = useStaticQuery(graphql`
        query{
            image: file(relativePath:{eq: "fondo2.jpg"}){
                sharp: childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    //console.log(image.sharp.fluid);

    return (  
        <>
            <div>
                <div>
                    <ImageBackground
                            Tag="section"
                            fluid={image.sharp.fluid}
                            fadeIn="soft"
                    >
                        <TextImagen>
                            <h1>Bienvenido a mi portafolio web</h1>
                            <p>Lugar donde podras saber un poco mas de mi, los proyectos que he desarrollado y la forma de poder contactarme</p>
                        </TextImagen>
                    </ImageBackground>
                </div>

            </div>
        </>
    );
}

export default Imagen;

