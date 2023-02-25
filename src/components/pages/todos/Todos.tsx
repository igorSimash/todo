import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../redux/action-creators/fetchTodos";
import {useTypedSelector} from "../../../hooks/useTypedSelect";
import MainHeader from "../../UI/header/MainHeader";
import MainSection from "../../UI/main/MainSection";
import UserMenuList from "../../UI/menu-list/UserMenuList";
import LanguageSelect from "../../UI/select/LanguageSelect";
import Category from "../../UI/todo-data-lists/Category";
import CaregoriesAside from "../../UI/main/sections/CaregoriesAside";
import TodoItem from "../../UI/todo-data-lists/TodoItem";
import TodoSection from "../../UI/main/sections/TodoSection";

const Todos: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, categories, todos, error} = useTypedSelector(state => state.todos);
    const [selectedCategory, setSelectedCategory] = useState(-1)
    useEffect(() => {
        dispatch(fetchTodos());
        if (error === 'Session expired')
            navigate('/login');
    }, [error]);
    return (
        <div className={'w-full h-screen'}>
            <MainHeader>
                <div className={'flex items-center'}>
                    LOGO TodoIg
                </div>
                <div className={'flex gap-5'}>
                    <LanguageSelect/>
                    <UserMenuList/>
                </div>
            </MainHeader>
            <MainSection className={'flex'}>
                <CaregoriesAside selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <TodoSection selectedCategory={selectedCategory}/>
            </MainSection>
        </div>
    );
};

export default Todos;