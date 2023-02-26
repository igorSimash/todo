import React from 'react';
import TodoCheckbox from "../input/TodoCheckbox";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface ITodoItemProps {
    title: string;
    description: string | null;
    priorityId: number;
    deadline: string | null;
    categoryId?: number | null;
}

const TodoItem: React.FC<ITodoItemProps> = ({title, description, priorityId, deadline, categoryId}) => {
    return (
        <div className={`flex w-1/2 pb-1 rounded-lg cursor-pointer
         ${deadline && new Date(deadline) < new Date() && ''}`}>
            <TodoCheckbox priorityId={priorityId}/>
            <div className={'flex flex-col justify-center'}>
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
                        <span className={`text-xs ${new Date(deadline) < new Date() ? 'text-black font-bold animate-pulse' : 'text-gray-500'}`}>
                        {deadline?.replace('T', ' ').slice(0, 16)}
                        </span>
                    </div>}
            </div>
        </div>
    );
};

export default TodoItem;