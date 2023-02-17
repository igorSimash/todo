import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CenterFlexScreen from "../screen/CenterFlexScreen";

const AfterSubmitEmail: React.FC = () => {
    const {t} = useTranslation(['afterSubmit'])

    return (
        <CenterFlexScreen className={'gap-6 bg-blue-400'}>
            <span className={'text-2xl font-bold text-white underline'}>
                {t('title', {ns: 'afterSubmit'})}
            </span>
            <span className={'text-xl text-white font-semibold'}>
                {t('description', {ns: 'afterSubmit'})}
            </span>
            <Link to={'/'} className={'underline'}>
                {t('linkToMain', {ns: 'afterSubmit'})}
            </Link>
        </CenterFlexScreen>
    );
};

export default AfterSubmitEmail;