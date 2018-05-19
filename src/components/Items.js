
import React from 'react';
import PropTypes from 'prop-types';
import ItemsList from './ItemsList';

class Items extends React.Component {

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    render() {
        const { items, getActiveItem, deleteItem } = this.props;

        return <ItemsList 
            items={items}
            getActiveItem={getActiveItem}
            deleteItem={deleteItem}/>
    }
}

Items.propTypes = {
    items: PropTypes.array,
    getActiveItem: PropTypes.func,
    deleteItem: PropTypes.func
}

export default Items;