import React, {useState} from 'react';
import Hamburger from "hamburger-react";
import {Drawer} from "@mui/material";
import CategoryAside from "../aside/CategoryAside";
import {useWindowSize} from "../../../hooks/useWindowSize";

const CategoryDrawer:React.FC<{ selectedCategory: number; setSelectedCategory: (id: number) => void }> = ({selectedCategory,setSelectedCategory}) => {
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [width] = useWindowSize();
    return (
        <div>
            <Hamburger toggled={toggleDrawer} toggle={setToggleDrawer} size={width < 570 ? 25 : 30}/>
            <Drawer
                anchor={'left'}
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
            >
                <div className={'py-7'}>
                    <CategoryAside selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </div>
            </Drawer>
        </div>
    );
};

export default CategoryDrawer;