import React, {useState} from 'react';
import LanguageSelect from "../../select/LanguageSelect";
import PasswordInput from "../../input/PasswordInput";
import SubmitError from "../../errors/SubmitError";
import SubmitInput from "../../input/SubmitInput";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import axios from "axios";

const ForgotPassFinal: React.FC = () => {
    const {t} = useTranslation(['forgot_pass_final', 'error']);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        if (password.length < 8)
            setError('passIsSmall');
        else if (password !== repeatPassword)
            setError('passNotMatch');
        else {
            axios.post(process.env.REACT_APP_API_FORGOT_PASS_FINAL as string,
                {
                    token: params.token,
                    password,
                })
                .then(() => {
                    navigate('/login')
                })
        }

    }

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
                                {t('title', {ns: 'forgot_pass_final'})}
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                {t('lightTitle', {ns: 'forgot_pass_final'})}
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <PasswordInput onChange={e => setPassword(e.target.value)} label={t('passLabel', {ns: 'forgot_pass_final'})} id={'reg-pass'}/>
                            <PasswordInput onChange={e => setRepeatPassword(e.target.value)} label={t('repPassLabel', {ns: 'forgot_pass_final'})} id={'reg-rep-pass'}/>
                            <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                                {t(error, {ns: 'error'})}
                            </SubmitError>
                        </div>
                        <div>
                            <SubmitInput onClick={handleClick} value={t('submit', {ns: 'forgot_pass_final'})}/>
                        </div>
                    </div>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>{t('signInQues', {ns: 'forgot_pass_final'})}</span>
                    <Link to={'/login'} className={'font-bold text-blue-600 text-lg'}>{t('signInLink', {ns: 'forgot_pass_final'})}</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassFinal;