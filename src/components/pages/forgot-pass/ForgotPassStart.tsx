import React, {useEffect, useState} from 'react';
import LanguageSelect from "../../UI/select/LanguageSelect";
import EmailInput from "../../UI/input/EmailInput";
import SubmitError from "../../UI/errors/SubmitError";
import SubmitInput from "../../UI/input/SubmitInput";
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import AfterSubmitEmail from "../../UI/after-submit/AfterSubmitEmail";
import {postData} from "../../../utils/fetch-data/PostData";

const ForgotPassStart: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);
    const {t, i18n} = useTranslation(['forgot_pass', 'error']);
    const params = useParams();

    useEffect(() => {
        if (params.error && params.error === '410'){
            setError('The link has expired');
            setEmail(new URLSearchParams(document.location.search).get('email') as string);
        }
    }, [params.error]);

    const handleClick = () => {
        const body = {
            email,
            language: i18n.language
        }

        postData(process.env.REACT_APP_API_FORGOT_PASS as string, body)
            .then(() => {
                setSubmitClicked(true);
                setError('');
            })
            .catch((err: string) => setError(err));
    };

    if (submitClicked)
        return <AfterSubmitEmail/>

    return (
        <div className={'h-screen flex'}>
            <div className={'h-full w-5/12 bg-lightBlue sm:w-3/12 s:hidden'}>

            </div>
            <form className={'relative w-7/12 sm:w-9/12 s:w-full'}>
                <div className={'absolute left-1/2 -translate-x-1/2 top-10'}>
                    <LanguageSelect/>
                </div>
                <div className={'flex justify-center items-center flex-col h-full'}>
                    <div className={'flex flex-col relative gap-14 w-80'}>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'font-semibold text-3xl'}>
                                {t('title', {ns: 'forgot_pass'})}
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                {t('lightTitle', {ns: 'forgot_pass'})}
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput value={email} onChange={e => setEmail(e.target.value)} label={t('emailLabel', {ns: 'forgot_pass'})}
                                        id={'reg-email'}/>
                            <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                                {t(error, {ns: 'error'})}
                            </SubmitError>
                        </div>

                        <div>
                            <SubmitInput
                                onClick={handleClick}
                                value={t('submit', {ns: 'forgot_pass'})}/>

                        </div>
                    </div>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end w-80 justify-center'}>
                    <span className={'font-semibold'}>{t('signInQues', {ns: 'forgot_pass'})}</span>
                    <Link to={'/login'} className={'font-bold text-solidBlue text-lg'}>{t('signInLink', {ns: 'forgot_pass'})}</Link>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassStart;