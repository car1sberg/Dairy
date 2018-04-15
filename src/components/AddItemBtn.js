
import React from 'react';
import styled from 'styled-components';


const AddBtn = styled.button`
    background-color: #27ccc0;
    color: white;
    height: 37px;
    width: 132px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 2px #000;
        transition: all .1s linear;
    }
`;

const AddItemBtn = () => <AddBtn type="submit">Add new</AddBtn>;

export default AddItemBtn;