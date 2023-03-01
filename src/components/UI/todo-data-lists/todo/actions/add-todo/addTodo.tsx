import React, {useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import './addTodo.css';
import InputNoBorder from "../../../../input/InputNoBorder";
import DateTimeInput from "../../../../input/DateTimeInput";
const AddTodo: React.FC = () => {
    const [addTodoOpen, setAddTodoOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('')
    return (
        <>
            {/*!addTodoOpen &&
            <div
                onClick={() => setAddTodoOpen(true)}
                className={'flex items-end pl-2 cursor-pointer font-medium gap-2 addTodoContainer'}
            >
                <AddIcon className={'rounded-full addTodoIcon text-mediumBlue'}/>
                <span className={'text-gray-600/90 addTodoSpan'}>Add todo</span>
            </div>*/}

            <div className={'border-2 rounded-lg p-3'}>
                <InputNoBorder className={'h-auto font-medium'} placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)}/>
                <InputNoBorder className={'resize-y h-24'} placeholder={'Description'} value={description} onChange={e => setDescription(e.target.value)}/>
                <div className={'flex'}>
                    <DateTimeInput className={'border-2 rounded-lg py-1'}/>

                </div>
            </div>
        </>
    );
};

export default AddTodo;