
import React from 'react';
import styled from 'styled-components';

const CommentsTitle = styled.h2`
    margin-bottom: 27px;
    font-weight: 300;
    font-size: 36px;
    color: #565a69;
`;

const Avatar = styled.div`
    width: 50px;
    height: 50px;
    background-color: #47568c;
`;

const Comment = styled.li`
    padding-top: 15px;
    padding: 15px 0 20px 0;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;

    &:last-child {
        border-bottom: none;
    }

    &:nth-child(odd) .avatar {
        background-color: #ff8a00;
    }
`;

const CommentText = styled.div`
    flex: 1;
    color: #666;
    padding-left: 15px;
    line-height: normal;
    margin-top: -3px;
    font-size: 13px;
`;


const CommentsList = ({currentItem}) => {
    return (
        <div>
            <CommentsTitle>Comments #{currentItem.id}</CommentsTitle>
            <ul>
                {currentItem.comments.map(comment => {
                    return (
                        <Comment key={comment.id}>
                            <Avatar className="avatar"></Avatar>
                            <CommentText>{comment.body}</CommentText>
                        </Comment>
                    )
                })}
            </ul>
        </div>
    )
}

export default CommentsList;