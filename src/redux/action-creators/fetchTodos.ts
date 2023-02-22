import {Dispatch} from "redux";
import {TodoAction, TodoActionType} from "../../types/reducer/todo";
import {changeLanguageAction} from "../reducer/LanguageReducer";
import {ILanguageAction} from "../../types/reducer/language";

export const fetchTodos = (): any => {
    return async (dispatch: Dispatch<TodoAction> & Dispatch<ILanguageAction>) => {
        try {
            dispatch({type: TodoActionType.FETCH_TODOS});
            await fetch(process.env.REACT_APP_API_TODO as string, {credentials: 'include'})
                .then(async (res: any) => {
                    if (!res.ok)
                        return Promise.reject((await res.json()).message);
                    return await res.json()
                })
                .then((data: { language: string, todos: unknown[] }) => {
                    dispatch(changeLanguageAction(data.language))
                    dispatch({
                        type: TodoActionType.FETCH_TODOS_SUCCESS,
                        payload: data.todos
                    });
                })
        } catch (err) {
            console.log(err);
            dispatch({type: TodoActionType.FETCH_TODOS_ERROR, payload: err as string})
        }
    }
}