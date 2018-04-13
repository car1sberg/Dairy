
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Items extends React.Component {

    getActiveItem(item) {
        this.props.getActiveItem(item);
    }

    deleteItem(item) {
        this.props.deleteItem(item);
    }

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    render() {
        const { items, getActiveItem, deleteItem } = this.props;

        return (
            <ul className="listBlock">
                {items.map(item => {
                    return (
                        <li 
                            className="item" 
                            key={item.id}>
                            <div className="itemTitle" onClick={getActiveItem.bind(this, item)}>
                                <Link to={`/item/${item.id}`}>{item.title}</Link>
                                <span className="commentsAmount">{item.comments.length}</span>
                            </div>
                            <button className="deleteBtn" onClick={deleteItem.bind(this, item)}>Delete</button>
                        </li>
                    )
                })}
            </ul> 
        )
    }
    
}

Items.propTypes = {
    items: PropTypes.array,
    getActiveItem: PropTypes.func,
    deleteItem: PropTypes.func
}

export default Items;