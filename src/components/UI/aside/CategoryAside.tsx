import React from 'react';
import Category from "../todo-data-lists/category/Category";
import {useTranslation} from "react-i18next";
import {useTypedSelector} from "../../../hooks/useTypedSelect";

const CategoryAside:React.FC<{ selectedCategory: number; setSelectedCategory: (id: number) => void }> = ({selectedCategory,setSelectedCategory}) => {
    const {t} = useTranslation('todos');
    const {categories} = useTypedSelector(state => state.todos);
    const categoriesToRender = [{id: 0, name: t('allCategory', {ns: 'todos'})}].concat([...categories]).concat([{
        id: -1,
        name: t('completedCategory', {ns: 'todos'})
    }]);
    return (
        <div className={'flex flex-col gap-2 mx-6 h-full'}>
            <span className={'text-xl font-semibold'}>{t('categoriesTitle', {ns: 'todos'})}</span>
            <div className={'flex flex-col gap-0.5 overflow-y-auto'}>
                {categoriesToRender.map((el) =>
                    <Category
                        className={`${el.id === selectedCategory && 'bg-lightBlue/60'} ${[0, -1].includes(el.id) && 'font-bold'}`}
                        name={el.name}
                        key={el.id}
                        deletable={![0, -1].includes(el.id)}
                        onClick={() => setSelectedCategory(el.id)}/>)
                }
            </div>
        </div>
    );
};

export default CategoryAside;