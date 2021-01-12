import React from 'react';
import Layout from '../components/Layout';
import useProyectos from '../hooks/use-Proyectos';
import ProyectoCompleto from '../components/ProyectoCompleto';


const Proyectos = () => {

    const proyectos = useProyectos();

    return (  
        <>
            <Layout>
                <div>
                    {proyectos.map( proyecto => (
                        <ProyectoCompleto
                            key={proyecto.id}
                            proyecto={proyecto}
                        />
                    ))}
                </div>
            </Layout>
        </>
    );
}

export default Proyectos;