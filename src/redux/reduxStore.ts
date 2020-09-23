import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunk from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer"
import sidebarReducer from "./sidebarReducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
))

// let store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store

export default store