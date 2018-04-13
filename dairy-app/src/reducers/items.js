
const initialState = [
    {
        id: 1,
        title: "Some good title",
        comments: [
            {
                id: 1,
                body: "Lorem ipsum dolor sit."
            },
            {
                id: 2,
                body: `A variation of the ordinary lorem ipsum text has been used

                    in typesetting since the 1960s or earlier, when it was popu-
                    larized by advertisements for Letraset transfer sheets. It was
                    
                    introduced to the Information Age in the mid-1980s`
            }
        ]
    },
    {
        id: 2,
        title: "Another good title",
        comments: [
            {
                id: 1,
                body: `A variation of the ordinary lorem ipsum text has been used

                        in typesetting since the 1960s or earlier, when it was popu-
                        larized by advertisements for Letraset transfer sheets. It was
                        
                        introduced to the Information Age in the mid-1980s`
            },
            {
                id: 2,
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ]
    }
]

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const ADD_COMMENT = 'ADD_COMMENT';

export default function items(state = initialState, action) {

    switch (action.type) {
        case ADD_ITEM:
           return [
               ...state, 
               action.payload
            ];
        case DELETE_ITEM:
           return state.filter(item => item.id !== action.id);
        case ADD_COMMENT :
            const active = state.find(item => item.id === action.itemId)
            const comment = Object.assign({}, action.payload);

            active.comments.push(comment);
            return [...state];
            
        default:    
            return state;
    }
}