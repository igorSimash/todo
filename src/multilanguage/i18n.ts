import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from "./english/English.json";
import Ukrainian from "./ukrainian/Ukrainian.json"
import Polish from "./polish/Polish.json"

const resources = {
    'en-US': {
        main: English.main,
        regStart: English.registrationStart,
        regFinal: English.registrationFinal,
        login: English.login,
        forgot_pass: English.forgot_pass,
        forgot_pass_final: English.forgot_pass_final,
        changePassword: English.change_password,
        afterSubmit: English.after_submit,
        error: English.errors,
        todos: English.todos,
        todoSections: English.todos.todoSections,
        todoPriorities: English.todos.priorities
    },
    'uk-UA': {
        main: Ukrainian.main,
        regStart: Ukrainian.registrationStart,
        regFinal: Ukrainian.registrationFinal,
        login: Ukrainian.login,
        forgot_pass: Ukrainian.forgot_pass,
        forgot_pass_final: Ukrainian.forgot_pass_final,
        changePassword: Ukrainian.change_password,
        afterSubmit: Ukrainian.after_submit,
        error: Ukrainian.errors,
        todos: Ukrainian.todos,
        todoSections: Ukrainian.todos.todoSections,
        todoPriorities: Ukrainian.todos.priorities
    },
    'pl-PL': {
        main: Polish.main,
        regStart: Polish.registrationStart,
        regFinal: Polish.registrationFinal,
        login: Polish.login,
        forgot_pass: Polish.forgot_pass,
        forgot_pass_final: Polish.forgot_pass_final,
        changePassword: Polish.change_password,
        afterSubmit: Polish.after_submit,
        error: Polish.errors,
        todos: Polish.todos,
        todoSections: Polish.todos.todoSections,
        todoPriorities: Polish.todos.priorities
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en-US", // Default language
    });

export default i18next;