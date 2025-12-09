const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


// Action types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


// Action creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    };
}


// Initial states
const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCreams: 20
};


// Cake reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
};


// Ice cream reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:
            return state;
    }
};


// Combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});


// Create store
const store = createStore(rootReducer);


// Log initial state
console.log('Initial State', store.getState());


// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
});
/*
WHY subscribe?
- This code runs every time the state updates.
- We use it to listen to changes in the store.
*/


// Dispatch some actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());


// Stop listening for updates
unsubscribe();
/*
WHY unsubscribe?
- It removes the listener that logs updates.
- If you don't unsubscribe, the listener keeps running forever.
- Prevents memory leaks and duplicate logs.
*/
