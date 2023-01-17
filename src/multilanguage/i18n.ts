import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import {English} from "./english/English";
import {Ukrainian} from "./ukrainian/Ukrainian"

const resources = {
    en: {
        reg: English.registration
    },
    ua: {
        reg: Ukrainian.registration
    },
    pl: {

    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng:"en", //default language
    });
export default i18next;