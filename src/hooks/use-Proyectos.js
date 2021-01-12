import { graphql, useStaticQuery } from 'gatsby';

const useProyectos = () => {

    const datos = useStaticQuery(graphql`
        query{
            allDatoCmsProyecto{
                nodes{
                    titulo
                    subtitulo
                    id
                    contenido
                    link
                    slug
                        imagen{
                        fluid(maxWidth: 1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    //console.log(datos);

    return datos.allDatoCmsProyecto.nodes.map( proyecto => ({
        titulo: proyecto.titulo,
        id: proyecto.id,
        contenido: proyecto.contenido,
        imagen: proyecto.imagen,
        slug: proyecto.slug,
        subtitulo: proyecto.subtitulo,
        link: proyecto.link
    }))

}

export default useProyectos;