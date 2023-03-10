import React, {useMemo, useState} from 'react';
import Modal from "../../../modal/Modal";
import {ITodo} from "../../../../../types/reducer/todo";
import {useTypedSelector} from "../../../../../hooks/useTypedSelect";
import ClassIcon from '@mui/icons-material/Class';
import ClearIcon from '@mui/icons-material/Clear';
import TodoCheckbox from "../../../input/TodoCheckbox";
import InputNoBorder from "../../../input/InputNoBorder";
import ItemSelect from "../../../select/item-select/ItemSelect";
import {SelectChangeEvent} from "@mui/material/Select";
import DateTimeInput from "../../../input/DateTimeInput";
import RoundedButton from "../../../button/RoundedButton";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../../../redux/action-creators/fetchTodos";
import TextInput from "../../../input/TextInput";
import {useTranslation} from "react-i18next";

interface ITodoModal {
    closeModal(): void;

    modalIsOpen: boolean;
    todo: ITodo;
}


const TodoModal: React.FC<ITodoModal> = ({closeModal, modalIsOpen, todo}) => {
    const {t} = useTranslation(['todos', 'todoSections', 'todoPriorities']);
    const {id, deadline, title, description, priority_id, category_id, completed} = todo;
    const {categories} = useTypedSelector(state => state.todos);
    const category = useMemo(() => categories.find(c => c.id === category_id)?.name || t('allCategory', {ns: 'todos'})!, [categories, category_id, t])
    const deadlineState = deadline?.slice(0, 16) || '';
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newCategory, setNewCategory] = useState(category);
    const [addCategory, setAddCategory] = useState(false);
    const [newPriorityId, setNewPriorityId] = useState(priority_id);
    const [newDeadline, setNewDeadline] = useState(deadlineState);
    const dispatch = useDispatch();

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

    const handleClose = () => {
        closeModal();
        setNewTitle(title);
        setNewDescription(description);
        setNewCategory(category);
        setAddCategory(false);
        setNewPriorityId(priority_id);
        setNewDeadline(deadlineState)
    };

    const handleSend = async () => {
        const data = JSON.stringify({
            id,
            title: newTitle,
            description: newDescription,
            priorityId: newPriorityId,
            category: newCategory !== t('allCategory', {ns: 'todos'})! ? newCategory : '',
            deadline: newDeadline
        })

        await fetch(process.env.REACT_APP_API_TODO as string,
            {
                credentials: 'include',
                mode: 'cors',
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: data
            });

        handleClose();
        dispatch(fetchTodos());
    }


    const handleChangeCategory = (e: SelectChangeEvent) => {
        if (e.target.value === t('addCategory', {ns: 'todoSections'})) {
            setAddCategory(true);
            setNewCategory('');
        } else {
            setAddCategory(false);
            setNewCategory(e.target.value);
        }
    };

    const handleCompleteTodo = async () => {
        await fetch(process.env.REACT_APP_API_TODO_COMPLETE as string, {
            credentials: 'include',
            mode: 'cors',
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        });
        handleClose();
        dispatch(fetchTodos());
    };

    return (
        <Modal
            closeModal={handleClose}
            modalIsOpen={modalIsOpen}>
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coolWhite rounded-lg outline-0
                 w-[830px] h-[92%] grid grid-cols-[70%_30%] grid-rows-[3rem_1fr_4rem] grid-areas-modal sm:w-11/12 s:w-11/12
                 s:flex s:flex-col `}
            >
                <div className={'grid-in-header flex items-center justify-between border-b-2 px-8 s:py-2'}>
                    <div className={'flex items-center gap-1'}>
                        <ClassIcon sx={{fontSize: 'small'}}/>
                        <span
                            className={'text-sm tracking-tight'}>{category}
                        </span>
                    </div>
                    <div className={'cursor-pointer hover:bg-gray-200 transition-all rounded-md'}
                         onClick={handleClose}>
                        <ClearIcon style={{color: 'gray'}}/>
                    </div>
                </div>
                <div className={'p-4 grid-in-[textarea] s:h-[40%]'}>
                    <div className={'flex h-full'}>
                        <div>
                            <TodoCheckbox priorityId={priority_id} onClick={handleCompleteTodo} checked={!!completed}/>
                        </div>
                        <div className={'flex flex-col gap-2 mt-1 h-full w-full'}>
                            <TextInput value={newTitle}
                                       className={'font-bold text-lg h-9 border-black/70 focus:border-[1px]'}
                                       onChange={e => setNewTitle(e.target.value)}
                                       placeholder={t('title', {ns: 'todoSections'})!}/>
                            <InputNoBorder value={newDescription} className={'h-full'}
                                           onChange={e => setNewDescription(e.target.value)}
                                           placeholder={t('description', {ns: 'todoSections'})!}/>
                        </div>
                    </div>
                </div>

                <div className={'border-l-2 bg-gray-200/50 grid-in-[rightSide] p-4 s:p-2.5 flex flex-col gap-4 s:flex-row s:flex-wrap s:items-center'}>
                    <div className={'border-b-2'}>
                        <span className={'text-sm text-black/50 font-medium'}>
                            {t('categoriesTitle', {ns: 'todos'})}
                        </span>
                        <ItemSelect
                            options={[{
                                name: t('allCategory', {ns: 'todos'})!,
                                id: 0
                            }].concat(categories).concat({name: t('addCategory', {ns: 'todoSections'})!, id: -1})}
                            disableUnderline
                            item={addCategory ? t('addCategory', {ns: 'todoSections'})! : newCategory}
                            setItem={handleChangeCategory}/>
                    </div>
                    {
                        addCategory
                        &&
                        <div className={'border-b-2'}>
                            <span className={'text-sm text-black/50 font-medium'}>
                                {t('addCategory', {ns: 'todoSections'})}
                            </span>
                            <InputNoBorder className={'border-[1px] mt-2'} value={newCategory}
                                           onChange={e => setNewCategory(e.target.value)}/>
                        </div>
                    }
                    <div className={'border-b-2 w-1/2'}>
                        <span className={'text-sm text-black/50 font-medium '}>
                            {t('priority', {ns: 'todoSections'})}
                        </span>
                        <ItemSelect
                            options={priorities} disableUnderline
                            item={(priorities.find(pr => pr.id === newPriorityId)!.name)}
                            setItem={e => setNewPriorityId((priorities.find(pr => pr.name === e.target.value))!.id)}/>
                    </div>
                    <div className={'border-b-2 flex flex-col w-[100%]'}>
                        <span className={'text-sm text-black/50 font-medium '}>
                            {t('deadline', {ns: 'todoSections'})}
                        </span>
                        <DateTimeInput value={newDeadline?.slice(0, 16)}
                                       onChange={e => setNewDeadline(e.target.value)}
                                       className={'w-full'}/>
                    </div>
                </div>
                <div className={'grid-in-[buttons] flex justify-end items-s gap-4 px-4 s:mt-auto s:mb-5'}>
                    <RoundedButton
                        onClick={handleClose}
                        className={'bg-gray-300'}>
                        {t('cancelButton', {ns: 'todoSections'})}
                    </RoundedButton>
                    <RoundedButton
                        className={'bg-mediumBlue'}
                        onClick={handleSend}>
                        {t('editButton', {ns: 'todoSections'})}
                    </RoundedButton>
                </div>
            </div>
        </Modal>
    );
};

export default TodoModal;