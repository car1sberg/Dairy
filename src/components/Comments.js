
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CommentsList from './CommentsList';

class Comments extends React.Component {

    addItem(e) {
        if (e.target.value.trim() !== '') {
            if (e.ctrlKey || (e.keyCode === 13 && e.keyCode === 17)) {
                this.props.onAddComment(this.props.currentItem.id, e.target.value);
                e.target.value = '';
            }
        } 
    }

    render() {
        const { items, currentItem } = this.props;

        return (
            <div>                          
                {items.length === 0 && currentItem === undefined &&
                    <h3>Nothing to display :(
                        <p>Please, add an item</p>
                    </h3>}

                {currentItem === undefined && items.length !== 0 &&
                <h3>Choose an item</h3>}
                
                {currentItem !== undefined &&
                <div>
                    <CommentsList currentItem={currentItem} />
                    <div className="textareaBlock">
                        <div className="textareaAvatar"></div>
                        <div className="textarea">
                            <textarea onKeyPress={this.addItem.bind(this)} />
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

Comments.propTypes = {
    items: PropTypes.array
}

export default withRouter(connect(
    state => ({
        items: state.items
    }),
    dispatch => ({
        onAddComment: (itemId, comment) => {
            const payload = {
                id: Date.now(),
                body: comment
            };
            dispatch({ type: 'ADD_COMMENT', itemId: itemId, payload })
        }
    })
)(Comments));