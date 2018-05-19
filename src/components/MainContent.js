
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
            currentItem: undefined,
        }
    }
    
    addItem(e) {
        e.preventDefault();
        
        if (this.itemsInput.value.trim().length !== 0) {
            this.props.onAddItem(this.itemsInput.value);
            this.itemsInput.value = '';
        }
        else {
            this.setState({ inputValue: undefined })
            this.itemsInput.value = '';
        }
    }

    deleteItem(id) {
        this.props.onDeleteItem(id);
        this.setState({currentItem: undefined});
        this.props.closeDialog();
    }

    getActiveItem(item) {
        this.setState({ currentItem: item });
    }

    handleInputValue(e) {
        this.setState({inputValue: e.target.value})
    }

    render() {
        const {currentItem, inputValue} = this.state;
        const {items} = this.props;
        const errorMsg = <p className="errorMsg">Item name can not be empty</p>
        
        return (
            <main className="mainBlock">
                <div className="itemsBlock">
                    <h2>Items</h2>
                    <form onSubmit={this.addItem.bind(this)} className="itemsForm">
                        <AddItemInput 
                            input={(input) => this.itemsInput = input}
                            onChange={this.handleInputValue.bind(this)}
                            />
                        <AddItemBtn />
                    </form>
                    {(inputValue !== undefined && inputValue.length !== 0 && inputValue.trim().length === 0)
                     && errorMsg
                    }
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
        onDeleteItem: (id) => {
            dispatch({ type: 'DELETE_ITEM',  payload: id })
        },
        closeDialog: () => {
            const payload = {
                isOpened: false
            }
            dispatch({ type: 'IS_CLOSED',  payload })
        }
    })
)(MainContent))