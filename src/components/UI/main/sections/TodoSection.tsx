import React from 'react';
import TodoItem from "../../todo-data-lists/TodoItem";
import {useTypedSelector} from "../../../../hooks/useTypedSelect";

const TodoSection: React.FC<{ selectedCategory: number }> = ({selectedCategory}) => {
    const {categories, todos} = useTypedSelector(state => state.todos);
    const categoryName = (categories.find(el => el.id === selectedCategory))?.name || 'All';
    const todosToRender =
        todos
            .filter((todo) => selectedCategory !== -1 ? todo.category_id === selectedCategory : todo)
            .sort((a, b) => a.priority_id - b.priority_id)
            .map((todo) =>
                <TodoItem title={todo.title} description={todo.description}
                          deadline={todo.deadline} priorityId={todo.priority_id}
                          key={todo.id}/>);
    return (
        <section className={'h-full shadow-xl w-full px-10 flex flex-col gap-5'}>
            <div>
                <h1 className={'font-semibold text-3xl'}>{categoryName} todos</h1>
                <h2 className={'font-medium'}>Total: {todosToRender.length}</h2>
            </div>
            <div className={'flex flex-col gap-2'}>
                {todosToRender}
            </div>
        </section>
    );
};

export default TodoSection;