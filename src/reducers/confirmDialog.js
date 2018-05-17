
const IS_OPENED = 'IS_OPENED';
const IS_CLOSED = 'IS_CLOSED';
const initialState = false;

export default function confirmDialog(state = initialState, action) {

    switch (action.type) {
        case IS_OPENED:
           return action.payload;
        case IS_CLOSED:
           return action.payload;
        default:    
            return state;
    }
}