import React from 'react';

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



    return (
        <div>
            <select
                className="border-2 border-black"
            >
                {languages.map(language =>
                    <option
                        className="w-12"
                        value={language.value}>
                        {language.title}
                    </option>)}
            </select>
        </div>
    );
};

export default LanguageSelect;