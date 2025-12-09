// Import redux library
const redux = require('redux');

// Get the createStore method from redux
const createStore = redux.createStore;


// Action type (constant)
const BUY_CAKE = 'BUY_CAKE';


// Action creator (returns an action object)
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}


// Initial state for the store
const initialState = {
    numOfCakes: 10
};


// Reducer function
// It receives the current state and an action,
// then returns the new state based on the action type.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state, // copy previous state
                numOfCakes: state.numOfCakes - 1 // update only this part
            };
        default:
            return state; // return unchanged state for unknown actions
    }
};


// Create Redux store using the reducer
const store = createStore(reducer);


// Print the initial state
console.log('Initial State', store.getState());


// Subscribe to store updates
// This function runs every time the state changes
const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
);


// Dispatch actions (state updates happen here)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());


// Stop listening for updates
// unsubscribe() removes the subscription created above
unsubscribe();
