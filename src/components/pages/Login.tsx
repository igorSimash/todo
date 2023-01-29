import React, {useEffect, useState} from 'react';
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import SubmitInput from "../input/SubmitInput";
import {Link, useNavigate} from "react-router-dom";
import LanguageSelect from "../select/LanguageSelect";
import {useTranslation} from "react-i18next";
import axios, {AxiosResponse} from "axios";
import SubmitError from "../errors/SubmitError";

const Login = () => {
    const {t} = useTranslation(['login', 'error']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [submitClicked, setSubmitClicked] = useState(false)
    useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_LOGIN as string,
            {
                withCredentials: true
                }
            )
            .then((res:AxiosResponse) => {
                if (res.status === 200) {
                    navigate("/todos");
                }
            })
    }, [submitClicked])

    const handleClick = () => {
        axios.post(process.env.REACT_APP_API_LOGIN as string, {
            email,
            password
        }, {withCredentials: true})
            .then(() => {
                setSubmitClicked(true);
                setError('');
            })
            .catch(err => {
                setError(err.response.status.toString());
            })
    }

    return (
        <div className={'h-screen flex'}>
            <div className={'relative w-5/12'}>
                <div className={'absolute left-1/2 -translate-x-1/2 top-10'}>
                    <LanguageSelect/>
                </div>
                <div className={'flex justify-center items-center flex-col h-full'}>
                    <div className={'flex flex-col gap-14 w-80'}>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'font-semibold text-3xl'}>
                                {t('title', {ns: 'login'})}
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                {t('lightTitle', {ns: 'login'})}
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput onChange={e => setEmail(e.target.value)} label={t('emailLabel', {ns: 'login'})}
                                        id={'reg-email'}/>
                            <PasswordInput onChange={e => setPassword(e.target.value)}
                                           label={t('passwordLabel', {ns: 'login'})} id={'reg-pass'}/>
                            <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                                {
                                    t(error, {ns: 'error'})
                                }
                            </SubmitError>
                        </div>
                        <div>
                            <SubmitInput onClick={handleClick} value={t('submit', {ns: 'login'})}/>
                        </div>
                    </div>
                </div>

                {error === '401' &&
                    <Link to={'/forgot-pass'}
                          className={'absolute left-1/2 -translate-x-1/2 bottom-20 text-blue-600 text-md underline'}>
                        Reset password
                    </Link>
                }



                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>{t('signUpQues', {ns: 'login'})}</span>
                    <Link to={'/registration/start'}
                          className={'font-bold text-blue-600 text-lg'}>{t('signUpLink', {ns: 'login'})}</Link>
                </div>
            </div>
            <div className={'h-full w-7/12 bg-blue-400'}>

            </div>
        </div>
    );
};

export default Login;