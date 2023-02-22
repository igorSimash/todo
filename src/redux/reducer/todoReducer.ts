import {TodoAction, TodoActionType, TodoState} from "../../types/reducer/todo";

const defaultState: TodoState = {
    todos: [],
    loading: false,
    error: null
};

export const todoReducer = (state = defaultState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionType.FETCH_TODOS:
            return {loading: true, error: null, todos: []};
        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {loading: false, error: null, todos: action.payload};
        case TodoActionType.FETCH_TODOS_ERROR:
            return {loading: false, error: action.payload, todos: []};
        default:
            return state;
    }
};

export const setTodosAction = (payload: unknown[]) => ({type: TodoActionType.FETCH_TODOS_SUCCESS, payload})

