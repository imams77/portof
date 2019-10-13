import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

// save state to storage
function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e);
    }
}

// load from local storage
function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}

const preloadedState = loadFromLocalStorage();

const store = createStore(rootReducer, preloadedState, compose(
    applyMiddleware(thunkMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
        return f;
    }
));

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});

export default store