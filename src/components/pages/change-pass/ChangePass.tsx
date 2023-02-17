import React, {useState} from 'react';
import CenterFlexScreen from "../../UI/screen/CenterFlexScreen";
import PasswordInput from "../../input/PasswordInput";
import SubmitInput from "../../input/SubmitInput";
import LightText from "../../UI/text/LightText";
import SubmitError from "../../errors/SubmitError";
import {useTranslation} from "react-i18next";

const ChangePass: React.FC = () => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [repNewPass, setRepNewPass] = useState('');
    const [error, setError] = useState('');
    const {t} = useTranslation(['error']);

    const handleClick = () => {
        if (newPass !== repNewPass)
            setError('passNotMatch');
        else {
            //fetch
        }
    }

    return (
        <div className={'h-screen flex'}>
            <div className={'w-7/12'}>
                <div className={'flex justify-center items-center h-full'}>
                    <div className={'flex flex-col gap-14'}>
                        <span className={'text-6xl text-blue-500'}>Change Password</span>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'text-xl mb-3'}>Password must contain:</span>
                            <LightText>At least 8 symbols</LightText>
                            <LightText>One uppercase symbol</LightText>
                            <LightText>One lowercase symbol</LightText>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-5/12 flex flex-col justify-center items-center'}>
                <form className={'flex flex-col items-center gap-10 w-96'}>
                    <div className={'flex flex-col items-start gap-8 w-full'}>
                        <PasswordInput onChange={e => setOldPass(e.target.value)}
                                       label={'Old password'} id={'old-pass'}/>
                        <PasswordInput onChange={e => setNewPass(e.target.value)}
                                       label={'New password'} id={'new-pass'}/>
                        <PasswordInput onChange={e => setRepNewPass(e.target.value)}
                                       label={'Repeat new password'} id={'rep-new-pass'}/>
                        <SubmitError className={`${error.length > 0 && 'opacity-100'}`}>
                            {
                                t(error, {ns: 'error'})
                            }
                        </SubmitError>
                    </div>
                    <div className={'w-full'}>
                        <SubmitInput value={'Change password'} onClick={handleClick}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePass;