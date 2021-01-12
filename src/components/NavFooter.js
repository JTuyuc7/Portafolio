import React from 'react';
import { Link } from 'gatsby';
import Styled from '@emotion/styled';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const Nav = Styled.nav`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    padding-top: .2rem;
    align-items: space-between;
    text-transform: uppercase;

    @media( max-width: 768px){
        padding-top: 0;
        padding-bottom: 3rem;
    }
`;

const NavLink = Styled(Link)`
    color: #FFF;
    font-size: 1.9rem;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Montserrat', serif;
    padding: 1rem;


    &:hover{
        background-color: #8cc5f2;
        color: #000;
        border-radius: .6rem;
        transition: all 0.4s linear;
    }

    @media( min-width: 768px){
        display: grid;
        justify-content: space-between;
    }
`;

const NavFooter = () => {
    return (  
        <>
            <Nav>
                <NavLink
                    target="_blank"
                    to={"https://github.com/JTuyuc7"}>
                    <img src={github} height="35" width="35" title="Bootstrap" alt=""/>
                </NavLink>
                <NavLink
                    target="_blank"
                    to={"https://www.instagram.com/jamest_29/"}>
                    <img src={instagram} height="35" width="35" title="Bootstrap" alt=""/>
                </NavLink>
                <NavLink
                    target="_blank"
                    to={"https://www.linkedin.com/in/jaime-tuyuc-61670b174/"}> 
                    <img src={linkedin} height="35" width="35" title="Bootstrap" alt=""/>
                </NavLink>
                <NavLink
                    target="_blank"
                    to={"https://twitter.com/JAIMETUYUC29"}>
                    <img src={twitter} height="35" width="35" title="Bootstrap" alt=""/>  
                </NavLink>
                    
            </Nav>
        </>
    );
}

export default NavFooter;