const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const intialStateBooks = {
    numberOfBooks: 10,
}

const intialStatePens = {
    numberOfPens: 20,
}

//wraping the action in a function
function book() {
    return {
        type: "BOOK",
        payload: "Books Data"
    }
}

//wraping the action in a function
function pen() {
    return {
        type: "PEN",
        payload: "Pens Data"
    }
}
const booksReducer = (state = intialStateBooks, action) => {
    switch (action.type) {
        case "BOOK": return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        default: return state;
    }
}

const pensReducer = (state = intialStatePens, action) => {
    switch (action.type) {
        case "PEN": return {
            ...state,
            numberOfPens: state.numberOfPens - 1
        }
        default: return state;
    }
}

const reducer=combineReducers({
    booksReducer,
   pensReducer
});

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated State Value', store.getState())
});

store.dispatch(book());
store.dispatch(book());
store.dispatch(pen());
store.dispatch(pen());
unsubscribe();
