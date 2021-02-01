const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    numberOfBooks: 10,
}

//wraping the action in a function
function book() {
    return {
        type: "BOOK",
        payload: "Books Data"
    }
}

//Reducer for actions
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "BOOK": {
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - 1
            }
        }
        default: return state;
    }
}

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
     console.log('Updated State Value', store.getState()) 
    });

store.dispatch(book());
store.dispatch(book());
unsubscribe();
