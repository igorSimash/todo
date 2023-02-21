interface FetchTodoAction {
    type: TodoActionType.FETCH_TODOS,
}

interface FetchTodoSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS,
    payload: unknown[]
}

interface FetchTodoErrorAction {
    type: TodoActionType.FETCH_TODOS_ERROR,
    payload: string
}

export interface TodoState {
    todos: unknown[]
    loading: boolean,
    error: null | string
}

export enum TodoActionType {
    FETCH_TODOS = 'FETCH_ARTICLES',
    FETCH_TODOS_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_ARTICLES_ERROR',
}

export type TodoAction =
    FetchTodoAction |
    FetchTodoSuccessAction |
    FetchTodoErrorAction;
