import React, {useState} from 'react';
import TodoModal from "./TodoModal";
import TodoItem from "./TodoItem";
import {ITodo} from "../../../../types/reducer/todo";

const Todo: React.FC<{todo: ITodo}> = ({todo}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <>
            <TodoItem todo={todo} openModal={handleOpen}/>
            <TodoModal closeModal={handleClose} modalIsOpen={modalOpen} todo={todo}/>
        </>
    );
};

export default Todo;