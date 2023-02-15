import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import EmailInput from "../../input/EmailInput";
import PasswordInput from "../../input/PasswordInput";
import LanguageSelect from "../../select/LanguageSelect";
import {useTranslation} from "react-i18next";
import SubmitInput from "../../input/SubmitInput";
import SubmitError from "../../errors/SubmitError";
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../../redux/reducer/LanguageReducer";

const RegistrationFinal: React.FC = () => {
    const {t, i18n} = useTranslation(['regFinal', 'error']);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const currUrl = new URLSearchParams(useLocation().search);
    const email = currUrl.get('email');
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeLanguageAction(currUrl.get('language') as string));
    }, [])

    const handleClick = () => {
        if (password !== repeatPassword)
            setError('passNotMatch');
        else {
            const body = JSON.stringify({
                email,
                password,
                token: params.token,
                language: i18n.language
            });
            fetch(process.env.REACT_APP_API_REG_FINAL as string,
                {
                    mode: 'cors',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body
                })
                .then(async (res: Response) => {
                    if (!res.ok)
                        return Promise.reject((await res.json()).message);
                })
                .then(() => {
                    setError('');
                    navigate('/login');
                })
                .catch((err: string) => {
                    setError(err);
                });
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
                                {t('title', {ns: 'regFinal'})}
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                {t('lightTitle', {ns: 'regFinal'})}
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput value={email as string} readonly={true} label={t('emailLabel', {ns: 'regFinal'})} id={'reg-email'}/>
                            <PasswordInput onChange={e => setPassword(e.target.value)} label={t('passLabel', {ns: 'regFinal'})} id={'reg-pass'}/>
                            <PasswordInput onChange={e => setRepeatPassword(e.target.value)} label={t('repPassLabel', {ns: 'regFinal'})} id={'reg-rep-pass'}/>
                            <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                                {t(error, {ns: 'error'})}
                            </SubmitError>
                        </div>
                        <div>
                            <SubmitInput onClick={handleClick} value={t('submit', {ns: 'regFinal'})}/>
                        </div>
                    </div>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>{t('signInQues', {ns: 'regFinal'})}</span>
                    <Link to={'/login'} className={'font-bold text-blue-600 text-lg'}>{t('signInLink', {ns: 'regFinal'})}</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationFinal;