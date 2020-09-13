import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer.ts";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer.ts";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer.ts";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

// let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;