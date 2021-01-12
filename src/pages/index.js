import React from "react";
import Styled from '@emotion/styled';
import Layout from '../components/Layout';
import Imagen from '../components/imagen';
import ContenidoInicio from '../components/contenidoicio';
import useProyectos from '../hooks/use-Proyectos';
import { css } from '@emotion/core';
import ProyectoPreview from '../components/Proyectopreview';

const Listado = Styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.5rem;
  }
`;

const IndexPage = () => {

  const proyectos = useProyectos();

  return(
    <>
      <Layout>
        <Imagen  />
  
        <ContenidoInicio  />
        <h2
          css={css`
            text-align: center;
            margin-top: 5rem;
            font-size: 3.5rem;
            margin-bottom: 2rem;
          `}
        >Algunos de mis proyectos </h2>

        <Listado>
          {proyectos.map( proyecto => (
            <ProyectoPreview  
              key={proyecto.id}
              proyecto={proyecto}
            />
          ))}
        </Listado>
      </Layout>
    </>
  )

}

export default IndexPage
