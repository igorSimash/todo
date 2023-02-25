import {TodoAction, TodoActionType, TodoState} from "../../types/reducer/todo";

const defaultState: TodoState = {
    todos: [],
    categories: [],
    loading: false,
    error: null
};

export const todoReducer = (state = defaultState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionType.FETCH_TODOS:
            return {loading: true, error: null, categories: [], todos: []};
        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {loading: false, error: null, categories: action.payload.categories, todos: action.payload.todos};
        case TodoActionType.FETCH_TODOS_ERROR:
            return {loading: false, error: action.payload, categories: [], todos: []};
        default:
            return state;
    }
};

export const setTodosAction = (payload: unknown[]) => ({type: TodoActionType.FETCH_TODOS_SUCCESS, payload});
export const setTodoErrorNull = () => ({type: TodoActionType.FETCH_TODOS_ERROR, payload: null});

