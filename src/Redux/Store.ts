
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducer, Action
import { UserReducer } from './User'

const rootReducer = combineReducers({
    user: UserReducer,
})

export type AppActionTypes =  IUserActions // | IUserActions
export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))