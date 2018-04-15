
import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './Home';
import Items from './Items';
import AddItemInput from './AddItemInput';
import AddItemBtn from './AddItemBtn';

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            currentItem: undefined
        }
    }
    
    addItem(e) {
        e.preventDefault();
        this.props.onAddItem(this.itemsInput.value);
        this.itemsInput.value = '';
    }

    deleteItem(obj) {
        this.props.onDeleteItem(obj);
        this.setState({currentItem: undefined});
    }

    getActiveItem(item) {
        this.setState({ currentItem: item });
    }

    render() {
        const {currentItem} = this.state;
        const {items} = this.props;

        return (
            <main className="mainBlock">
                <div className="itemsBlock">
                    <h2>Items</h2>
                    <form onSubmit={this.addItem.bind(this)} className="itemsForm">
                        <AddItemInput input={(input) => this.itemsInput = input} />
                        <AddItemBtn />
                    </form>
                    <Items 
                        getActiveItem={this.getActiveItem.bind(this)} 
                        items={items} 
                        deleteItem={this.deleteItem.bind(this)} />
                </div>
                <div className="commentsBlock">
                    <Switch>
                        <Route exact path="/Dairy/" component={Home} />
                        <Route path="/item/:id" render={() => <Comments currentItem={currentItem} />} />
                    </Switch>
                </div>
            </main>
        )
    }
}

export default withRouter(connect(
    state => ({
        items: state.items
    }),
    dispatch => ({
        onAddItem: (itemTitle) => {
            const payload = {
                id: Date.now(),
                title: itemTitle,
                comments: []
            };
            dispatch({ type: 'ADD_ITEM', payload })
        },
        onDeleteItem: (obj) => {
            dispatch({ type: 'DELETE_ITEM',  id: obj.id })
        }
    })
)(MainContent))