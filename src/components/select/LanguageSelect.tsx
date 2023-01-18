import React from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../redux/reducer/LanguageReducer";

const languages:({ title: string; value: string })[] = [
    {
        value: 'en',
        title: "English"
    },
    {
        value: 'ua',
        title: "Ukrainian - Українська"
    },
    {
        value: 'pl',
        title: "Polish - Polski"
    }
]

const LanguageSelect: React.FC = () => {
    const dispatch = useDispatch();
    const {i18n} = useTranslation();
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguageAction(e.target.value));
        i18n.changeLanguage(e.target.value)
    }

    return (
        <div>
            <select
                className="border-2 border-black"
                onChange={handleChange}
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