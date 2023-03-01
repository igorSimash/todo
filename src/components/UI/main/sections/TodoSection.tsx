import React from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelect";
import {useTranslation} from "react-i18next";
import Todo from "../../todo-data-lists/todo/Todo";
import AddTodo from "../../todo-data-lists/todo/actions/add-todo/addTodo";

const TodoSection: React.FC<{ selectedCategory: number }> = ({selectedCategory}) => {
    const {t} = useTranslation('todos');
    const {categories, todos} = useTypedSelector(state => state.todos);
    const categoryName = (categories.find(el => el.id === selectedCategory))?.name || t('allCategory', {ns: 'todos'});
    const todosToRender = todos.filter((todo) => selectedCategory !== 0 ? todo.category_id === selectedCategory : todo)
        .sort((a, b) => a.priority_id - b.priority_id)
        .map((todo) => <Todo todo={todo} key={todo.id}/>);
    return (
        <section className={'h-full shadow-md w-full flex justify-center'}>
            <div className={'flex flex-col gap-5 px-10 py-8 w-[830px]'}>
                <div className={'flex justify-between pl-3'}>
                    <h1 className={'font-semibold text-3xl'}>{categoryName}</h1>
                    <h2 className={'font-medium'}>{t('total', {ns: 'todos'})}: {todosToRender.length}</h2>
                </div>
                <div className={'flex w-full flex-col gap-3 overflow-y-auto'}>
                    <AddTodo/>
                    {todosToRender}
                </div>

            </div>
        </section>
    );
};

export default TodoSection;