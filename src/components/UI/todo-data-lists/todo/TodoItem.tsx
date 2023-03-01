import React from 'react';
import TodoCheckbox from "../../input/TodoCheckbox";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {ITodo} from "../../../../types/reducer/todo";

interface ITodoItem {
    todo: ITodo;

    openModal(): void;

}

const TodoItem: React.FC<ITodoItem> = ({todo, openModal}) => {
    const {deadline, title, description, priority_id} = todo;

    return (
        <div
            className={`flex  cursor-pointer border-b-2 pb-3 ${deadline && new Date(deadline) < new Date() && ''}`}
        >
            <TodoCheckbox priorityId={priority_id}/>
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
        </div>
    );
};

export default TodoItem;