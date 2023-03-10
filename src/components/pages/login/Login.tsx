import React, {useState} from 'react';
import EmailInput from "../../UI/input/EmailInput";
import PasswordInput from "../../UI/input/PasswordInput";
import SubmitInput from "../../UI/input/SubmitInput";
import {Link, useNavigate} from "react-router-dom";
import LanguageSelect from "../../UI/select/LanguageSelect";
import {useTranslation} from "react-i18next";
import SubmitError from "../../UI/errors/SubmitError";
import {postData} from "../../../utils/fetch-data/PostData";

const Login = () => {
    const {t} = useTranslation(['login', 'error']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        const body = {
            email,
            password
        };
        postData(process.env.REACT_APP_API_LOGIN as string, body)
            .then(() => {
                setError('');
                navigate('/todos');
            })
            .catch((err: string) => {
                setError(err);
            });
    }

    return (
        <div className={'h-screen flex'}>
            <form className={'relative w-5/12 sm:w-9/12 s:w-full'}>
                <div className={'absolute left-1/2 -translate-x-1/2 top-5'}>
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
                        <div className={'flex flex-col items-center gap-3'}>
                            <SubmitInput onClick={handleClick} value={t('submit', {ns: 'login'})}/>
                            {error === 'Invalid password' &&
                                <Link to={'/forgot-pass'}
                                      className={'text-blue-600 text-md underline'}>
                                    {t('resetPassword', {ns: 'login'})}
                                </Link>
                            }
                        </div>
                    </div>
                </div>



                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end justify-center w-80'}>
                    <span className={'font-semibold'}>{t('signUpQues', {ns: 'login'})}</span>
                    <Link to={'/registration/start'}
                          className={'font-bold text-solidBlue text-lg'}>{t('signUpLink', {ns: 'login'})}</Link>
                </div>
            </form>
            <div className={'h-full w-7/12 sm:w-3/12 s:hidden bg-lightBlue'}></div>
        </div>
    );
};

export default Login;