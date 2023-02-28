import React, {useMemo, useState} from 'react';
import Modal from "../../modal/Modal";
import {ITodo} from "../../../../types/reducer/todo";
import {useTypedSelector} from "../../../../hooks/useTypedSelect";
import ClassIcon from '@mui/icons-material/Class';
import ClearIcon from '@mui/icons-material/Clear';
import TodoCheckbox from "../../input/TodoCheckbox";
import InputNoBorder from "../../input/InputNoBorder";
import ItemSelect from "../../select/ItemSelect";
import {priorities} from "../../../../assets/Priorities";
import {SelectChangeEvent} from "@mui/material/Select";

interface ITodoModal {
    closeModal(): void;

    modalIsOpen: boolean;
    todo: ITodo;
}


const TodoModal: React.FC<ITodoModal> = ({closeModal, modalIsOpen, todo}) => {
    const {id, deadline, title, description, priority_id, category_id} = todo;
    const {categories} = useTypedSelector(state => state.todos);
    const category = useMemo(() => categories.find(c => c.id === category_id)?.name || 'All', [categories, category_id])
    const priority = useMemo(() => priorities.find(p => p.id === priority_id)?.name, [priority_id]);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newCategory, setNewCategory] = useState(categories.find(c => c.id === category_id)?.name || 'All');
    const [addCategory, setAddCategory] = useState(false);
    const [newPriority, setNewPriority] = useState(priority);
    const handleClose = () => {
        closeModal();
        setNewTitle(title);
        setNewDescription(description);
        setNewCategory(category);
        setAddCategory(false);
        setNewPriority(priority);
    };

    const handleChangeCategory = (e: SelectChangeEvent) => {
        if (e.target.value === 'Add category') {
            setAddCategory(true);
            setNewCategory('');
        }
        else {
            setAddCategory(false);
            setNewCategory(e.target.value);
        }
    }

    return (
        <Modal
            closeModal={handleClose}
            modalIsOpen={modalIsOpen}>
            <div
                className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coolWhite rounded-lg outline-0 w-[830px] h-[92%] grid grid-cols-[70%_30%] grid-rows-[3rem_1fr_3rem] grid-areas-modal'}
            >
                <div className={'grid-in-header flex items-center justify-between border-b-2 px-8'}>
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
                <div className={'p-4 grid-in-[textarea]'}>
                    <div className={'flex h-full'}>
                        <div>
                            <TodoCheckbox priorityId={priority_id}/>
                        </div>
                        <div className={'flex flex-col gap-2 mt-1 h-full w-full'}>
                            <InputNoBorder value={newTitle} className={'font-bold text-lg h-9'}
                                           onChange={e => setNewTitle(e.target.value)} placeholder={'Title'}/>
                            <InputNoBorder value={newDescription} className={'h-full'}
                                           onChange={e => setNewDescription(e.target.value)}
                                           placeholder={'Description'}/>
                        </div>
                    </div>
                </div>

                <div className={'border-l-2 bg-gray-200/50 grid-in-[rightSide] p-4 flex flex-col gap-4'}>
                    <div className={'border-b-2'}>
                        <span className={'text-sm text-black/50 font-medium'}>
                            Category
                        </span>
                        <ItemSelect
                            options={[{name: 'All', id: 0}].concat(categories).concat({name: 'Add category', id: -1})}
                            disableUnderline
                            item={addCategory ? 'Add category' : newCategory} setItem={handleChangeCategory}/>
                    </div>
                    {
                        addCategory
                        &&
                        <div className={'border-b-2'}>
                            <span className={'text-sm text-black/50 font-medium'}>
                                Add category
                            </span>
                            <InputNoBorder className={'border-[1px] mt-2'} value={newCategory} onChange={e => setNewCategory(e.target.value)}/>
                        </div>
                    }
                    <div className={'border-b-2'}>
                        <span className={'text-sm text-black/50 font-medium '}>
                            Priority
                        </span>
                        <ItemSelect options={priorities} disableUnderline
                                    item={newPriority} setItem={e => setNewPriority(e.target.value)}/>
                    </div>

                </div>
                <div className={'grid-in-[buttons]'}>

                </div>
            </div>
        </Modal>
    );
};

export default TodoModal;