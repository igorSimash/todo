import React from 'react';
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../redux/reducer/LanguageReducer";
import {useTypedSelector} from "../../hooks/useTypedSelect";

const languages:({ title: string; value: string })[] = [
    {
        value: 'en-US',
        title: "English"
    },
    {
        value: 'uk-UA',
        title: "Ukrainian - Українська"
    },
    {
        value: 'pl-PL',
        title: "Polish - Polski"
    }
];

const LanguageSelect: React.FC = () => {
    const dispatch = useDispatch();
    const language = useTypedSelector(state => state.language.language)
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguageAction(e.target.value));
    };

    return (
        <div>
            <select
                className="border-2 border-black"
                onChange={handleChange}
                value={language}
            >
                {languages.map((language, index) =>
                    <option
                        key={index}
                        className="w-12"
                        value={language.value}>
                        {language.title}
                    </option>)}
            </select>
        </div>
    );
};

export default LanguageSelect;