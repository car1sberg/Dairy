
import React from 'react';
import styled from 'styled-components';


const InputDiv = styled.div`

    & input {
        width: 265px;
        color: #2b2f3e;
        height: 37px;
        font-size: 16px;
        flex: 1;
        margin-right: 20px;
        padding: 0 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        outline: none;
        box-sizing: border-box;
    }
`;

function AddItemInput({input}) {
    return (
        <InputDiv>
            <input 
                type="text" 
                placeholder="Type name here..."
                ref={input}
                required />
        </InputDiv>
    )
}

export default AddItemInput;