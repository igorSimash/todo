import {useTranslation} from "react-i18next";

const {t} = useTranslation(['todos', 'todosAddTodo']);

export const priorities = [
    {
        id: 1,
        name: 'Important priority'
    },
    {
        id: 2,
        name: 'Medium priority'
    },
    {
        id: 3,
        name: 'No priority'

    }
]