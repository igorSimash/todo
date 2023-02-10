import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from "./english/English.json";
import Ukrainian from "./ukrainian/Ukrainian.json"
import Polish from "./polish/Polish.json"

const resources = {
    'en-US': {
        regStart: English.registrationStart,
        regFinal: English.registrationFinal,
        login: English.login,
        forgot_pass: English.forgot_pass,
        forgot_pass_final: English.forgot_pass_final,
        error: English.errors
    },
    'uk-UA': {
        regStart: Ukrainian.registrationStart,
        regFinal: Ukrainian.registrationFinal,
        login: Ukrainian.login,
        forgot_pass: Ukrainian.forgot_pass,
        forgot_pass_final: Ukrainian.forgot_pass_final,
        error: Ukrainian.errors
    },
    'pl-PL': {
        regStart: Polish.registrationStart,
        regFinal: Polish.registrationFinal,
        login: Polish.login,
        forgot_pass: Polish.forgot_pass,
        forgot_pass_final: Polish.forgot_pass_final,
        error: Polish.errors
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en-US", //default language
    });

export default i18next;