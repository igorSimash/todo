import React, {useEffect, useState} from 'react';
import LanguageSelect from "../../select/LanguageSelect";
import EmailInput from "../../input/EmailInput";
import SubmitInput from "../../input/SubmitInput";
import {Link, useNavigate, useParams} from "react-router-dom";
import SubmitError from "../../errors/SubmitError";
import axios, {AxiosResponse} from "axios";
import {useTranslation} from "react-i18next";

const RegistrationStart: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);
    const [error, setError] = useState('');
    const {t} = useTranslation(['regStart', 'error']);
    const params = useParams();
    const navigate = useNavigate();
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
                    return;
                }
            })

        if (params.error) {
            setError(params.error.toString())
            setEmail(new URLSearchParams(document.location.search).get('email') as string)
        }
    }, [])
    const handleClick = () => {
        axios.post(process.env.REACT_APP_API_REG_START as string, {
            email: email
        })
            .then(() => {
                setSubmitClicked(true);
                setError('');
            })
            .catch(err => {
                setError(err.response.status.toString());
            })
    }

    if (submitClicked)
        return <div>Good job</div>

    return (
        <div className={'h-screen flex'}>
            <div className={'h-full w-5/12 bg-blue-400'}>

            </div>
            <div className={'relative w-7/12'}>
                <div className={'absolute left-1/2 -translate-x-1/2 top-10'}>
                    <LanguageSelect/>
                </div>
                <div className={'flex justify-center items-center flex-col h-full'}>
                    <form className={'flex flex-col relative gap-14 w-80'}>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'font-semibold text-3xl'}>
                                {t('title', {ns: 'regStart'})}
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                {t('lightTitle', {ns: 'regStart'})}
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput value={email} onChange={e => setEmail(e.target.value)} label={t('emailLabel', {ns: 'regStart'})}
                                        id={'reg-email'}/>
                            <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                                {t(error, {ns: 'error'})}
                            </SubmitError>
                        </div>

                        <div>
                            <SubmitInput
                                onClick={handleClick}
                                value={t('submit', {ns: 'regStart'})}/>

                        </div>
                    </form>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>{t('signInQues', {ns: 'regStart'})}</span>
                    <Link to={'/login'} className={'font-bold text-blue-600 text-lg'}>{t('signInLink', {ns: 'regStart'})}</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationStart;