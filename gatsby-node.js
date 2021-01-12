exports.createPages = async({actions, graphql, reporter}) => {

    const resultado = await graphql(`
        query{
            allDatoCmsProyecto{
                nodes{
                    slug
                    contenido
                }
            }
        }
    `)

    //console.log(resultado.data.allDatoCmsProyecto.nodes);

    if(resultado.erros){
        reporter.panic('No hubo resultados', resultado.errors)
    }

    // Si hay habitaciones crear las paginas estaticas

    const proyectos = resultado.data.allDatoCmsProyecto.nodes;

    proyectos.forEach( proyecto => {
        actions.createPage({
            path: proyecto.slug,
            component: require.resolve('./src/components/proyectos.js'),
            context: {
                slug: proyecto.slug
            }
        })
    })
}