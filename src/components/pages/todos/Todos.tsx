import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../redux/action-creators/fetchTodos";
import {useTypedSelector} from "../../../hooks/useTypedSelect";
import MainHeader from "../../UI/header/MainHeader";
import MainSection from "../../UI/main/MainSection";
import UserMenuList from "../../UI/menu-list/UserMenuList";
import LanguageSelect from "../../UI/select/LanguageSelect";
import CategoriesAside from "../../UI/main/sections/CategoriesAside";
import TodoSection from "../../UI/main/sections/TodoSection";
import LoaderFullScreen from "../../UI/loader/LoaderFullScreen";

const Todos: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, error} = useTypedSelector(state => state.todos);
    const [selectedCategory, setSelectedCategory] = useState(-1)
    useEffect(() => {
        dispatch(fetchTodos());
        if (error === 'Session expired')
            navigate('/login');
    }, [error]);
    return (
        <div className={'w-full h-screen'}>
            <MainHeader className={'bg-mediumBlue shadow-gray-400 shadow-sm'}>
                <div className={'flex items-center'}>
                    LOGO TodoIg
                </div>
                <div className={'flex gap-5'}>
                    <LanguageSelect changeInDB/>
                    <UserMenuList/>
                </div>
            </MainHeader>

            {!loading
                ?
                <MainSection className={'flex'}>
                    <CategoriesAside selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    <TodoSection selectedCategory={selectedCategory}/>
                </MainSection>
                :
                <LoaderFullScreen/>
            }
        </div>
    );
};

export default Todos;