import React from 'react';

interface IEmailInput{
    label: string;
    id: string;
}

const EmailInput: React.FC<IEmailInput> = ({label,id}) => {
    return (
        <div className={'flex flex-col w-full'}>
            <label
                htmlFor={id}
                className={'font-semibold'}
            >
                {label}
            </label>
            <input
                type="email"
                id={id}
                className={'border-black border-b-2 h-10 w-full'}
            />
        </div>
    );
};

export default EmailInput;