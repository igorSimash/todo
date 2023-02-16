import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AfterSubmitEmail: React.FC = () => {
    const {t} = useTranslation(['afterSubmit'])

    return (
        <div className={'h-screen w-screen flex flex-col gap-6 justify-center items-center text-center bg-blue-400'}>
            <span className={'text-2xl font-bold text-white underline'}>
                {t('title', {ns: 'afterSubmit'})}
            </span>
            <span className={'text-xl text-white font-semibold'}>
                {t('description', {ns: 'afterSubmit'})}
            </span>
            <Link to={'/'} className={'underline'}>
                {t('linkToMain', {ns: 'afterSubmit'})}
            </Link>
        </div>
    );
};

export default AfterSubmitEmail;