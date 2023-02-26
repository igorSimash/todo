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
        <aside className={'h-full w-64 py-5'}>
            <div className={'flex flex-col gap-2 mx-6 h-full '}>
                <span className={'text-xl font-semibold'}>{t('categoriesTitle', {ns: 'todos'})}</span>
                <div className={'flex flex-col gap-1 overflow-y-auto -scroll-pr-6'}>
                    {categoriesToRender.map((el) =>
                        <Category
                            className={el.id === selectedCategory ? 'bg-lightBlue/60' : ''}
                            name={el.name}
                            key={el.id}
                            onClick={() => setSelectedCategory(el.id)}/>)
                    }
                </div>
            </div>
        </aside>
    );
};

export default CategoriesAside;