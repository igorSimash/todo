import React from 'react';
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import SubmitInput from "../input/SubmitInput";
import {Link} from "react-router-dom";
import LanguageSelect from "../select/LanguageSelect";

const Login = () => {
    return (
        <div className={'h-screen flex'}>
            <div className={'relative w-5/12'}>
                <div className={'absolute left-1/2 -translate-x-1/2 top-10'}>
                    <LanguageSelect/>
                </div>
                <div className={'flex justify-center items-center flex-col h-full'}>
                    <div className={'flex flex-col gap-14 '}>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'font-semibold text-3xl'}>
                                Sign in to your account
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                Let's continue
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput label={'Email'} id={'reg-email'}/>
                            <PasswordInput label={'Password'} id={'reg-pass'}/>
                        </div>
                        <div>
                            <SubmitInput value={'Sign in'}/>
                        </div>
                    </div>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>Don't have an account?</span>
                    <Link to={'/registration'} className={'font-bold text-blue-600 text-lg'}>Sign up</Link>
                </div>
            </div>
            <div className={'h-full w-7/12 bg-blue-400'}>

            </div>
        </div>
    );
};

export default Login;