import React, {useState} from 'react';
import PasswordInput from "../../UI/input/PasswordInput";
import SubmitInput from "../../UI/input/SubmitInput";
import LightText from "../../UI/text/LightText";
import SubmitError from "../../UI/errors/SubmitError";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {postData} from "../../../utils/fetch-data/PostData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useWindowSize} from "../../../hooks/useWindowSize";
const ChangePass: React.FC = () => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [repNewPass, setRepNewPass] = useState('');
    const [error, setError] = useState('');
    const {t} = useTranslation(['error', 'changePassword']);
    const navigate = useNavigate()
    const [width] = useWindowSize();
    const handleClick = () => {
        if (newPass !== repNewPass)
            setError('passNotMatch');
        else {
            const body = {
                oldPassword: oldPass,
                newPassword: newPass
            };

            postData(process.env.REACT_APP_API_CHANGE_PASS as string, body)
                .then(() => {
                    setError('');
                    navigate('/login');
                })
                .catch((err: string) => {
                    setError(err)
                });
        }
    }

    return (
        <div className={'h-screen flex relative justify-center '}>
            <ArrowBackIcon className={'absolute top-10 left-10 cursor-pointer'} onClick={() => navigate('/todos')}/>
            {width > 875
                &&
                <div className={'w-7/12'}>
                    <div className={'flex justify-center items-center h-full'}>
                        <div className={'flex flex-col gap-14'}>
                            <span
                                className={'text-6xl md:text-5xl text-solidBlue'}>{t('title', {ns: 'changePassword'})}</span>
                            <div className={'flex flex-col gap-2'}>
                                <span
                                    className={'text-xl mb-3 md:mb-1'}>{t('passContainTitle', {ns: 'changePassword'})}</span>
                                <LightText>{t('contain8Symb', {ns: 'changePassword'})}</LightText>
                                <LightText>{t('containOneUpper', {ns: 'changePassword'})}</LightText>
                                <LightText>{t('containOneLower', {ns: 'changePassword'})}</LightText>
                                <LightText>{t('noCyrillic', {ns: 'changePassword'})}</LightText>
                            </div>
                        </div>
                    </div>
                </div>}
            <div className={'w-5/12 flex flex-col justify-center items-center'}>
                <form className={'flex flex-col items-center gap-10 w-96 md:w-80 s:w-80'}>
                    <div className={'flex flex-col items-start gap-8 w-full'}>
                        <PasswordInput onChange={e => setOldPass(e.target.value)}
                                       label={t('oldPass', {ns: 'changePassword'})} id={'old-pass'}/>
                        <PasswordInput onChange={e => setNewPass(e.target.value)}
                                       label={t('newPass', {ns: 'changePassword'})} id={'new-pass'}/>
                        <PasswordInput onChange={e => setRepNewPass(e.target.value)}
                                       label={t('repNewPass', {ns: 'changePassword'})} id={'rep-new-pass'}/>
                        <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                            {t(error, {ns: 'error'})}
                        </SubmitError>
                    </div>
                    <div className={'w-full'}>
                        <SubmitInput value={t('submit', {ns: 'changePassword'})} onClick={handleClick}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePass;