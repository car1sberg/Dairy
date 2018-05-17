
import { combineReducers } from 'redux';
import items from './items';
import confirmDialog from './confirmDialog';

export default combineReducers({
    items,
    confirmDialog
})