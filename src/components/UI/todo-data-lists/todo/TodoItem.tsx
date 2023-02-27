import React from 'react';
import TodoCheckbox from "../../input/TodoCheckbox";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {ITodo} from "../../../../types/reducer/todo";

interface ITodoItem {
    todo: ITodo;
    openModal(): void;

}
const TodoItem: React.FC<ITodoItem> = ({todo, openModal}) => {
    const {id, deadline, title, description, priority_id, category_id} = todo;

    return (
        <div
            className={`flex w-1/2 pb-1 rounded-lg cursor-pointer ${deadline && new Date(deadline) < new Date() && ''}`}
        >
            <TodoCheckbox priorityId={priority_id}/>
            <div
                className={'flex flex-col justify-center'}
                 onClick={openModal}
            >
                <span className={'text-md'}>
                    {title}
                </span>
                {description &&
                    <span className={'text-xs text-gray-500'}>
                    {description}
                    </span>}
                {deadline &&
                    <div className={'flex gap-1 items-center'}>
                        <CalendarMonthIcon sx={{fontSize: 'small', color: '#6b7280'}}/>
                        <span
                            className={`text-xs ${new Date(deadline) < new Date() ? 'text-black font-bold animate-pulse' : 'text-gray-500'}`}>
                        {deadline?.replace('T', ' ').slice(0, 16)}
                        </span>
                    </div>}
            </div>
        </div>
    );
};

export default TodoItem;