import React from 'react';
import Header from './Header';
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/react';
import Footer from './footer';

const Layout = ({children}) => {
    return (  
        <>

            <Global
                styles={css`
                    html{
                        font-size: 62.5%;
                        
                        box-sizing: border-box;
                    }
                    *, *:before *:after{
                        box-sizing: inherit;
                    }
                    body{
                        background-color: #d3e7f3;
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.6;
                        
                    }
                    h1, h2, h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2{
                        font-family: 'Montserrat', serif;
                    }
                    h3{
                        font-family: 'Poppins', sans-serif;
                    }
                    ul{
                        list-style: none;
                    }
                    p{
                        font-family: 'Quicksand', sans-serif;
                    }
                `}
            />

            <Helmet>
                <title>
                    Jaime Tuyuc
                </title>

                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"  rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,500&?family=Quicksand:wght@300&family=Poppins:ital,wght@0,600;1,500&display=swap" rel="stylesheet" /> 
            </Helmet>

            <Header  />

            
            {children}

            <Footer />
        </>
    );
}

export default Layout;