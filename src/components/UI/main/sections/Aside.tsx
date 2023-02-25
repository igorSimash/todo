import React from 'react';
import Category from "../../todo-data-lists/Category";
import {useTypedSelector} from "../../../../hooks/useTypedSelect";

const Aside: React.FC<{selectedCategory: number; setSelectedCategory: (id: number) => void}> = ({selectedCategory, setSelectedCategory}) => {
    const {categories} = useTypedSelector(state => state.todos);
    const categoriesToRender = [...categories];
    categoriesToRender.unshift({id: -1, name: 'All'});
    return (
        <aside className={'h-full w-1/6 border-gray-400 border-r-2 '}>
            <div className={'flex flex-col mx-9'}>
                {categoriesToRender.map((el) =>
                    <Category
                        className={el.id === selectedCategory ? 'bg-gray-300' : ''}
                        name={el.name}
                        key={el.id}
                        onClick={() => setSelectedCategory(el.id)}/>)
                }
            </div>
        </aside>
    );
};

export default Aside;