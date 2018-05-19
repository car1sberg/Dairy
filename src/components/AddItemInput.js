
import React from 'react';
import styled from 'styled-components';


const InputDiv = styled.div`

    & input {
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

    @media only screen and (min-width: 900px) {
        & input {
            width: 265px;
        }
    }
`;

function AddItemInput({input, onChange}) {
    return (
        <InputDiv>
            <input 
                onChange={onChange.bind(this)}
                type="text" 
                placeholder="Type name here..."
                ref={input}
                required />
        </InputDiv>
    )
}

export default AddItemInput;