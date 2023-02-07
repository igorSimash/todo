export interface ILanguageState {
    language: string;
}

export interface ILanguageAction {
    type: string;
    payload: string;
}

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';