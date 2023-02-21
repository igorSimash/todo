import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {languageReducer} from "../reducer/LanguageReducer";
import {todoReducer} from "../reducer/todoReducer";

const rootReducer = combineReducers({
    language: languageReducer,
    todos: todoReducer
})

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));