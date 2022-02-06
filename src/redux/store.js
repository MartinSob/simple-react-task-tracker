import allReducers from './reducers'
import { createStore } from 'redux';

// Store: Global, Where the data is
let store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//   console.log(store.getState());
// })

// // Dispatch: How we send the actions
// store.dispatch(increment(2));

export default store;