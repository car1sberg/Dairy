
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ConfirmDialog from './Dialog';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


const List = styled.ul`
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
    min-width: 97px;
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

class Items extends React.Component {

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    handleClose() {
        this.props.closeDialog();
    }

    handleOpenDialog(obj) {
        this.props.openDialog(obj);
    }

    render() {
        const {
            items,
            getActiveItem,
            deleteItem,
            dialogStatus,
            currentId,
            currentTitle
        } = this.props;

        return (
            <List>
                {items.map(item => {
                    return (
                        <Item key={item.id}>
                            <ItemLink onClick={getActiveItem.bind(this, item)}>
                                <Link to={`/item/${item.id}`}>{item.title}</Link>
                                <CommentsAmount>{item.comments.length}</CommentsAmount>
                            </ItemLink>
                            <DeleteBtn onClick={this.handleOpenDialog.bind(this, item)}>
                                Delete
                            </DeleteBtn>
                        </Item>
                    )
                })}
                <ConfirmDialog 
                    open={dialogStatus}
                    title={currentTitle}
                    onClick={deleteItem.bind(this, currentId)}
                    handleClose={this.handleClose.bind(this)} />
            </List>
        )
    }
}

Items.propTypes = {
    items: PropTypes.array,
    getActiveItem: PropTypes.func,
    deleteItem: PropTypes.func
}

export default withRouter(connect(
    state => ({
        dialogStatus: state.confirmDialog.isOpened,
        currentId: state.confirmDialog.idToDelete,
        currentTitle: state.confirmDialog.title
    }),
    dispatch => ({
        openDialog: (item) => {
            const payload = {
                idToDelete: item.id,
                isOpened: true,
                title: item.title
            }
            dispatch({ type: 'IS_OPENED', payload })
        },
        closeDialog: () => {
            const payload = {
                isOpened: false
            }
            dispatch({ type: 'IS_CLOSED',  payload })
        }
    })
)(Items));