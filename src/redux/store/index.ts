import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {languageReducer} from "../reducer/LanguageReducer";

const rootReducer = combineReducers({
    language: languageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));