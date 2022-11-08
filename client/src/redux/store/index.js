
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// composeWithDevTools es una función que nos permite usar las herramientas de Redux DevTools
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index.js';



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


