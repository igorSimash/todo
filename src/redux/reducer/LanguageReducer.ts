import {CHANGE_LANGUAGE, ILanguageAction, ILanguageState} from "../../types/language";



const initialState:ILanguageState = {
    language: 'en'
}

export const languageReducer = (state = initialState, action:ILanguageAction): ILanguageState => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {language: action.payload};
        default:
            return state;
    }
};

export const changeLanguageAction = (payload: string) => ({type: CHANGE_LANGUAGE, payload});