import React from 'react';
import Category from "../../todo-data-lists/Category";
import {useTypedSelector} from "../../../../hooks/useTypedSelect";
import {useTranslation} from "react-i18next";

const CategoriesAside: React.FC<{selectedCategory: number; setSelectedCategory: (id: number) => void}> = ({selectedCategory, setSelectedCategory}) => {
    const {t} = useTranslation('todos');
    const {categories} = useTypedSelector(state => state.todos);
    const categoriesToRender = [...categories];
    categoriesToRender.unshift({id: -1, name: t('allCategory', {ns: 'todos'})});
    return (
        <aside className={'h-full w-64 '}>
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

export default CategoriesAside;