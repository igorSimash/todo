import React, {useState} from 'react';
import LanguageSelect from "../select/LanguageSelect";
import EmailInput from "../input/EmailInput";
import SubmitInput from "../input/SubmitInput";
import {Link} from "react-router-dom";
import axios from "axios";

const RegistrationStart:React.FC = () => {

    const [email, setEmail] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleClick = () => {
        axios.post(process.env.REACT_APP_API_REG_START as string, {email: email})
        setSubmitClicked(true);
    }

    if (submitClicked)
        return <div></div>

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
                                Create a new account
                            </span>
                            <span className={'font-light tracking-wide opacity-75'}>
                                Let's get started
                            </span>
                        </div>
                        <div className={'flex flex-col items-start gap-4'}>
                            <EmailInput value={email} onChange={e => setEmail(e.target.value)} label={"Email"} id={'reg-email'}/>
                        </div>
                        <div>
                            <SubmitInput
                                onClick={handleClick}
                                value={"Send an email"}/>
                        </div>
                    </div>
                </div>
                <div className={'absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-3 items-end'}>
                    <span className={'font-semibold'}>Already have an account?</span>
                    <Link to={'/login'} className={'font-bold text-blue-600 text-lg'}>Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationStart;