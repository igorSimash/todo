import React from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelect";
import {useTranslation} from "react-i18next";
import Todo from "../../todo-data-lists/todo/Todo";
import AddTodo from "../../todo-data-lists/todo/actions/add-todo/AddTodo";
import {useWindowSize} from "../../../../hooks/useWindowSize";

const TodoSection: React.FC<{ selectedCategory: number }> = ({selectedCategory}) => {
    const {t} = useTranslation('todos');
    const {categories, todos} = useTypedSelector(state => state.todos);
    const [width] = useWindowSize();
    const categoryName = (categories.find(el => el.id === selectedCategory))?.name || t('allCategory', {ns: 'todos'});

    // cat 0 -> all uncompleted; cat -1 -> all completed; else -> category uncompleted

    const todosToRender = todos
        .filter((todo) => {
            if (selectedCategory === 0) return !todo.completed;
            else if (selectedCategory === -1) return todo.completed;
            else return todo.category_id === selectedCategory && !todo.completed
        })
        .sort((a, b) => a.priority_id - b.priority_id)
        .map((todo) =>
            <Todo todo={todo} key={todo.id}/>);


    return (
        <section className={`h-full shadow-md ${width < 800 && 'shadow-none'} w-full flex justify-center overflow-y-auto`}>
            <div className={`flex flex-col gap-5 px-10 ${width < 800 && `px-0 pr-8`} py-8 w-[840px]`}>
                <div className={'flex justify-between pl-3'}>
                    <h1 className={'font-semibold text-3xl max-w-sm s:w-44 overflow-x-hidden text-ellipsis'}>{categoryName}</h1>
                    <h2 className={'font-medium'}>{t('total', {ns: 'todos'})}: {todosToRender.length}</h2>
                </div>
                <div className={'flex w-full flex-col gap-3 pb-40'}>
                    {selectedCategory !== -1 && <AddTodo selectedCategory={(categories.find(c => c.id === selectedCategory)?.name)}/>}
                    {todosToRender}
                </div>
            </div>
        </section>
    );
};

export default TodoSection;