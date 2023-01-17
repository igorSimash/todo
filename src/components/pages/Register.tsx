import React from 'react';
import {Link} from "react-router-dom";
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import SubmitInput from "../input/SubmitInput";
import LanguageSelect from "../select/LanguageSelect";
import {useTranslation} from "react-i18next";

const Register: React.FC = () => {
    const {t} = useTranslation('reg');

    return (
        <div className={'h-screen flex'}>
            <div className={'h-full w-5/12 bg-blue-400'}>

            </div>
            <div className={'relative w-7/12'}>
                <div className={'absolute left-1/2 -translate-x-1/2 top-10'}>
                    <LanguageSelect/>
                </div>
                <div className={'flex justify-center items-center flex-col h-full'}>
                    <div className={'flex flex-col gap-14 w-80'}>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'font-semibold text-3xl'}>
                                {t('1', {ns: 'reg'})}
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                {t('2', {ns: 'reg'})}
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput label={t('3', {ns: 'reg'})} id={'reg-email'}/>
                            <PasswordInput label={t('4', {ns: 'reg'})} id={'reg-pass'}/>
                            <PasswordInput label={t('5', {ns: 'reg'})} id={'reg-rep-pass'}/>
                        </div>
                        <div>
                            <SubmitInput value={t('6', {ns: 'reg'})}/>
                        </div>
                    </div>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>{t('7', {ns: 'reg'})}</span>
                    <Link to={'/login'} className={'font-bold text-blue-600 text-lg'}>{t('8', {ns: 'reg'})}</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;