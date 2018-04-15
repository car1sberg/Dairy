
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Items = styled.ul`
    padding-top: 20px;
`;

const Item = styled.li`
    color: #2b2f3e;
    font-size: 16px;
    font-weight: 600;
    position: relative;
    display: flex;
    min-height: 55px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;

    &::before {
        height: 100%;
        content: '';
        width: 5px;
        background: #ff2f5a;
        position: absolute;
        left: -28px;
        top: 0;
        display: block;
        opacity: 0;
        transition: all .2s linear;
    }

    &:hover::before {
        opacity: 1;
    }
`;

const ItemLink = styled.div`
    & a {
        text-decoration: none;
        color: #2b2f3e;
    }
`;

const CommentsAmount = styled.span`
    background: #27ccc0;
    color: white;
    font-size: 13px;
    font-weight: 700;
    padding: 1px 10px;
    border-radius: 10px;
    margin-left: 5px;
`;

const DeleteBtn = styled.button`
    color: #ff305a;
    border: 1px solid #ff305a;
    background: white;
    font-size: 16px;
    font-weight: 300;
    width: 97px;
    height: 34px;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    transition: all .2s linear;

    &:hover {
        background: #ff305a;
        color: white;
    }
`;

const ItemsList = ({items, getActiveItem, deleteItem}) => {
    return (
        <Items>
            {items.map(item => {
                return (
                    <Item key={item.id}>
                        <ItemLink onClick={getActiveItem.bind(this, item)}>
                            <Link to={`/item/${item.id}`}>{item.title}</Link>
                            <CommentsAmount>{item.comments.length}</CommentsAmount>
                        </ItemLink>
                        <DeleteBtn onClick={deleteItem.bind(this, item)}>Delete</DeleteBtn>
                    </Item>
                )
            })}
        </Items> 
    )
}

export default ItemsList;