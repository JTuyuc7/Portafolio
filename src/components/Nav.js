import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    padding-top: 1rem;

    @media(min-width: 768px){
        padding-bottom: 0;
        padding-top: 0;
    }

`;

const NavLink = styled(Link)`
    color: #FFF;
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'Montserrat', serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type{
        margin-right: 0;
    }
    &.pagina-actual{
        border-bottom: 3px solid #FFF;
    }

    &:hover{
        background-color: #FFF;
        color: #000;
        transition: all 0.4s linear;
        border-radius: .5rem;
    }
`;

const Navegacion = () => {
    return (  
        <>
            <Nav>
                <NavLink 
                    to={'/'}
                    activeClassName="pagina-actual"
                >Inicio</NavLink>
                <NavLink 
                    to={'/proyectos'}
                    activeClassName="pagina-actual"
                >Proyectos</NavLink>
                <NavLink 
                    to={'/sobremi'}
                    activeClassName="pagina-actual"
                >Sobre Mi</NavLink>
            </Nav>
        </>
    );
}

export default Navegacion;