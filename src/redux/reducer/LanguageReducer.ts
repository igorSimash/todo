import {ILanguageAction, ILanguageState} from "../../types/language";
import i18n from "../../multilanguage/i18n";

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const initialState:ILanguageState = {
    language: 'en-US'
}

export const languageReducer = (state = initialState, action:ILanguageAction): ILanguageState => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {language: action.payload};
        default:
            return state;
    }
};

export const changeLanguageAction = (payload: string) => {
    i18n.changeLanguage(payload);
    return {
        type: CHANGE_LANGUAGE,
        payload
    }
};