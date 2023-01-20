import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import {English} from "./english/English";
import {Ukrainian} from "./ukrainian/Ukrainian"
import {Polish} from "./polish/Polish"

const resources = {
    en: {
        regStart: English.registrationStart,
        regFinal: English.registrationFinal,
        login: English.login,
        error: English.errors

    },
    ua: {
        regStart: Ukrainian.registrationStart,
        regFinal: Ukrainian.registrationFinal,
        login: Ukrainian.login,
        error: Ukrainian.errors
    },
    pl: {
        regStart: Polish.registrationStart,
        regFinal: Polish.registrationFinal,
        login: Polish.login,
        error: Polish.errors
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng:"en", //default language
    });
export default i18next;