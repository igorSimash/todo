import React, {useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import './addTodo.css';
import InputNoBorder from "../../../../input/InputNoBorder";
import DateTimeInput from "../../../../input/DateTimeInput";
import {priorities} from "../../../../../../assets/Priorities";
import ItemSelect from "../../../../select/ItemSelect";
import {useTypedSelector} from "../../../../../../hooks/useTypedSelect";
import {SelectChangeEvent} from "@mui/material/Select";
import TextInput from "../../../../input/TextInput";
import RoundedButton from "../../../../button/RoundedButton";
import {fetchTodos} from "../../../../../../redux/action-creators/fetchTodos";
import {useDispatch} from "react-redux";

const AddTodo: React.FC<{selectedCategory?: string | undefined;}> = ({selectedCategory}) => {
    const [addTodoOpen, setAddTodoOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(selectedCategory || 'All');
    const [addCategory, setAddCategory] = useState(false);
    const [priority, setPriority] = useState(3);
    const [deadline, setDeadline] = useState('');
    const {categories} = useTypedSelector(state => state.todos);
    const dispatch = useDispatch();
    const handleClose = () => {
        setAddTodoOpen(false);
        setTitle('');
        setDescription('');
        setCategory(selectedCategory || 'All');
        setAddCategory(false);
        setPriority(3);
        setDeadline('')
    };

    const handleChangeCategory = (e: SelectChangeEvent) => {
        if (e.target.value === 'Add category') {
            setAddCategory(true);
            setCategory('');
        } else {
            setAddCategory(false);
            setCategory(e.target.value);
        }
    };

    const handleSend = async () => {
        const data = JSON.stringify({
            title: title,
            description: description,
            priorityId: priority,
            category: category !== 'All' ? category : '',
            deadline: deadline
        })

        await fetch(process.env.REACT_APP_API_TODO as string,
            {
                credentials: 'include',
                mode: 'cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: data
            });

        handleClose();
        dispatch(fetchTodos());
    }

    return (
        <>
            {!addTodoOpen
                ?
                <div
                    onClick={() => setAddTodoOpen(true)}
                    className={'flex items-end pl-2 cursor-pointer font-medium gap-2 addTodoContainer'}
                >
                    <AddIcon className={'rounded-full addTodoIcon text-mediumBlue'}/>
                    <span className={'text-gray-600/90 addTodoSpan'}>Add todo</span>
                </div>
                :
                <div className={'border-2 rounded-lg p-3'}>
                    <InputNoBorder className={'h-auto font-medium'} placeholder={'Title'} value={title}
                                   onChange={e => setTitle(e.target.value)}/>
                    <InputNoBorder className={'resize-y h-24'} placeholder={'Description'} value={description}
                                   onChange={e => setDescription(e.target.value)}/>
                    <div className={'flex gap-3 border-b-2 py-2'}>
                        <DateTimeInput className={'border-2 rounded-lg py-1'}
                                       onChange={e => setDeadline(e.target.value)} value={deadline.slice(0, 16)}/>
                        <ItemSelect options={priorities}
                                    className={'border-2 rounded-lg'}
                                    disableUnderline
                                    item={(priorities.find(pr => pr.id === priority)!.name)} setItem={e => setPriority((priorities.find(pr => pr.name === e.target.value))!.id)}/>
                    </div>
                    <div className={'py-2 flex justify-between'}>
                        <div className={'flex items-center gap-2'}>
                            <ItemSelect
                                options={[{name: 'All', id: 0}].concat(categories).concat({name: 'Add category',id: -1})}
                                disableUnderline className={'border-2 rounded-lg w-[160px]'}
                                item={addCategory ? 'Add category' : selectedCategory || 'All'} setItem={handleChangeCategory}/>
                            {
                                addCategory
                                &&
                                <TextInput className={'border-[#e5e7eb] border-2 rounded-lg py-[8px]'} placeholder={'Add category'} value={category}
                                               onChange={e => setCategory(e.target.value)}/>
                            }
                        </div>
                        <div className={'flex gap-3'}>
                            <RoundedButton
                                onClick={handleClose}
                                className={'bg-gray-300'}>
                                Cancel
                            </RoundedButton>
                            <RoundedButton
                                className={'bg-mediumBlue'}
                                onClick={handleSend}>
                                Add
                            </RoundedButton>
                        </div>
                    </div>
                </div>
            }


        </>
    );
};

export default AddTodo;