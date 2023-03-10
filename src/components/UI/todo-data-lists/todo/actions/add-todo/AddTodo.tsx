import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import './addTodo.css';
import InputNoBorder from "../../../../input/InputNoBorder";
import DateTimeInput from "../../../../input/DateTimeInput";
import ItemSelect from "../../../../select/item-select/ItemSelect";
import {useTypedSelector} from "../../../../../../hooks/useTypedSelect";
import {SelectChangeEvent} from "@mui/material/Select";
import TextInput from "../../../../input/TextInput";
import RoundedButton from "../../../../button/RoundedButton";
import {fetchTodos} from "../../../../../../redux/action-creators/fetchTodos";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

const AddTodo: React.FC<{selectedCategory?: string | undefined;}> = ({selectedCategory}) => {
    const {t} = useTranslation(['todos', 'todoSections', 'todoPriorities']);
    const [addTodoOpen, setAddTodoOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(selectedCategory || t('allCategory', {ns: 'todos'})!);
    const [addCategory, setAddCategory] = useState(false);
    const [priority, setPriority] = useState(3);
    const [deadline, setDeadline] = useState('');
    const {categories} = useTypedSelector(state => state.todos);
    const dispatch = useDispatch();
    const categoryValue = useMemo(() => addCategory ? t('addCategory', {ns: 'todoSections'})! : selectedCategory ?? category, [addCategory, category, selectedCategory]);

    const priorities = [
        {
            id: 1,
            name: t('important', {ns: 'todoPriorities'})
        },
        {
            id: 2,
            name: t('medium', {ns: 'todoPriorities'})
        },
        {
            id: 3,
            name: t('noPriority', {ns: 'todoPriorities'})
        }
    ];

    const handleClose = useCallback(() => {
        setAddTodoOpen(false);
        setTitle('');
        setDescription('');
        setCategory(selectedCategory || t('allCategory', {ns: 'todos'})!);
        setAddCategory(false);
        setPriority(3);
        setDeadline('')
    }, [selectedCategory, t]);
    
    useEffect(handleClose, [handleClose, selectedCategory]);

    const handleChangeCategory = (e: SelectChangeEvent) => {
        if (e.target.value === t('addCategory', {ns: 'todoSections'})) {
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
            category: category !== t('allCategory', {ns: 'todos'}) ? category : '',
            deadline: deadline
        });

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
    };

    return (
        <>
            {!addTodoOpen
                ?
                <div
                    onClick={() => setAddTodoOpen(true)}
                    className={'flex items-end pl-2 cursor-pointer font-medium gap-2 addTodoContainer'}
                >
                    <AddIcon className={'rounded-full addTodoIcon text-mediumBlue'}/>
                    <span className={'text-gray-600/90 addTodoSpan'}>{t('addTodo', {ns: 'todos'})}</span>
                </div>
                :
                <div className={'border-2 rounded-lg p-3'}>
                    <InputNoBorder className={'h-auto font-medium'} placeholder={t('title', {ns: 'todoSections'})!} value={title}
                                   onChange={e => setTitle(e.target.value)}/>
                    <InputNoBorder className={'resize-y h-24'} placeholder={t('description', {ns: 'todoSections'})!} value={description}
                                   onChange={e => setDescription(e.target.value)}/>
                    <div className={'flex gap-3 s:gap-2 border-b-2 s:border-none py-2 s:flex-col'}>
                        <DateTimeInput className={'border-2 rounded-lg py-1'}
                                       onChange={e => setDeadline(e.target.value)} value={deadline.slice(0, 16)}/>
                        <ItemSelect options={priorities}
                                    className={'border-2 rounded-lg'}
                                    disableUnderline
                                    item={(priorities.find(pr => pr.id === priority)!.name)} setItem={e => setPriority((priorities.find(pr => pr.name === e.target.value))!.id)}/>
                    </div>
                    <div className={'py-2 s:pt-0 flex justify-between sm:flex-col sm:gap-4 s:flex-col s:gap-4'}>
                        <div className={'flex items-center s:items-start gap-2 s:flex-col'}>
                            <ItemSelect
                                options={[{name: t('allCategory', {ns: 'todos'}), id: 0}].concat(categories).concat({name: t('addCategory', {ns: 'todoSections'}) ,id: -1})}
                                disableUnderline className={'border-2 rounded-lg w-[160px] s:w-full'}
                                item={categoryValue} setItem={handleChangeCategory}/>
                            {
                                addCategory
                                &&
                                <TextInput className={'border-[#e5e7eb] border-2 rounded-lg py-[8px] s:w-full'} placeholder={t('addCategory', {ns: 'todoSections'})!} value={category}
                                               onChange={e => setCategory(e.target.value)}/>
                            }
                        </div>
                        <div className={'flex gap-3 s:justify-end self-end'}>
                            <RoundedButton
                                onClick={handleClose}
                                className={'bg-gray-300'}>
                                {t('cancelButton', {ns: 'todoSections'})}
                            </RoundedButton>
                            <RoundedButton
                                className={'bg-mediumBlue'}
                                onClick={handleSend}>
                                {t('addButton', {ns: 'todoSections'})}
                            </RoundedButton>
                        </div>
                    </div>
                </div>
            }


        </>
    );
};

export default AddTodo;