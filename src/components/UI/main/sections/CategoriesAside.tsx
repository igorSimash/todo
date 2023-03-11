import React from 'react';
import {useWindowSize} from "../../../../hooks/useWindowSize";
import CategoryDrawer from "../../drawer/CategoryDrawer";
import CategoryAside from "../../aside/CategoryAside";

const CategoriesAside: React.FC<{ selectedCategory: number; setSelectedCategory: (id: number) => void }> = ({selectedCategory,setSelectedCategory}) => {
    const [width] = useWindowSize();

    return (
        <aside className={`h-full w-64 ${width < 800 && 'w-fit py-7 px-1'} py-8`}>
            {
                width > 800
                    ?
                    <CategoryAside selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    :
                    <CategoryDrawer selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            }
        </aside>
    );
};

export default CategoriesAside;