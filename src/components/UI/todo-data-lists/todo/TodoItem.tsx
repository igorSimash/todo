import React, {useState} from 'react';
import TodoCheckbox from "../../input/TodoCheckbox";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {ITodo} from "../../../../types/reducer/todo";
import {fetchTodos} from "../../../../redux/action-creators/fetchTodos";
import {useDispatch} from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteDialog from "../../dialog/DeleteDialog";

interface ITodoItem {
    todo: ITodo;

    openModal(): void;

}

const TodoItem: React.FC<ITodoItem> = ({todo, openModal}) => {
    const {id, deadline, title, description, priority_id, completed} = todo;
    const dispatch = useDispatch();
    const [todoHovered, setTodoHovered] = useState(false);
    const [wantToDelete, setWantToDelete] = useState(false);
    const handleComplete = async () => {
        await fetch(process.env.REACT_APP_API_TODO_COMPLETE as string, {
            credentials: 'include',
            mode: 'cors',
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        });
        dispatch(fetchTodos());
    };

    const handleDelete = async () => {
        await fetch(process.env.REACT_APP_API_TODO as string, {
            credentials: 'include',
            mode: 'cors',
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        });
        dispatch(fetchTodos());
    }

    return (
        <div
            className={`flex  cursor-pointer border-b-2 pb-3 relative ${deadline && new Date(deadline) < new Date() && ''}`}
            onMouseEnter={(e) => setTodoHovered(true)}
            onMouseLeave={(e) => setTodoHovered(false)}
        >
            <TodoCheckbox priorityId={priority_id} onClick={handleComplete} checked={!!completed}/>
            <div
                className={'flex flex-col justify-center w-2/3'}
                onClick={openModal}
            >
                <span className={'text-md w-fit'}>
                    {title}
                </span>
                {description &&
                    <div className={'text-xs text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden'}>
                        {description}
                    </div>}
                {deadline &&
                    <div className={'flex gap-1 items-center w-fit'}>
                        <CalendarMonthIcon sx={{fontSize: 'small', color: '#6b7280'}}/>
                        <span
                            className={`text-xs ${new Date(deadline) < new Date() ? 'text-black font-bold animate-pulse' : 'text-gray-500'}`}>
                        {deadline?.replace('T', ' ').slice(0, 16)}
                        </span>
                    </div>}
            </div>
            <div className={`absolute top-0 right-0 ${todoHovered ? 'opacity-100' : 'opacity-0'}`}>
                <DeleteForeverIcon
                    className={'text-gray-600 hover:bg-gray-300 rounded-md hover:text-black'}
                    onClick={() => setWantToDelete(true)}
                />
            </div>
            <DeleteDialog onClose={() => setWantToDelete(false)} onDelete={handleDelete} isOpen={wantToDelete} itemName={title}>
                <div>
                    Are you sure you want to delete todo
                    <span className={'font-bold'}> "{title}" </span>
                    ?
                </div>
            </DeleteDialog>
        </div>
    );
};

export default TodoItem;