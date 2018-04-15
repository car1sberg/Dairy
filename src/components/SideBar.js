
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Aside = styled.aside`
    max-width: 270px;
    width: 100%;
    background-color: #2b2f3e;
    height: 100vh;
    box-sizing: border-box;
    padding: 27px;

    & a {
        text-decoration: none;
        color: white;
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

const Sidebar = () => {
    return (
        <Aside>
            <Title><Link to="/Dairy/">dairy app</Link></Title>
            <Slogan>Comment with no sense</Slogan>
        </Aside>
    )
}

export default Sidebar;