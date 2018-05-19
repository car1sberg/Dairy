
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Aside = styled.aside`
    background-color: #2b2f3e;
    box-sizing: border-box;
    padding: 27px;

    & a {
        text-decoration: none;
        color: white;
    }

    @media (min-width: 900px) {
        height: 100vh;
        width: 100%;
        max-width: 270px;
    }

    @media (max-width: 600px) {
        height: unset;
        width: unset;
        max-width: unset;
        text-align: center;
    }
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 300;
`;

const Slogan = styled.p`
    color: #808080;
    font-size: 18px;
`;

const Copyright = styled.span`
    position: absolute;
    bottom: 20px;
    font-size: 13px;
    color: white;

    @media (max-width: 600px) {
        display: none;
    }
`;

const Sidebar = () => {
    return (
        <Aside>
            <Title><Link to="/Dairy/">dairy app</Link></Title>
            <Slogan>Comment with no sense</Slogan>
            <Copyright>Created by Volodymyr Ersteniuk</Copyright>
        </Aside>
    )
}

export default Sidebar;