import React from 'react';

interface IEmailInput{
    label: string;
    id: string;
    readonly?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<IEmailInput> = ({label,id, readonly, value,onChange}) => {
    return (
        <div className={'flex flex-col w-full'}>
            <label
                htmlFor={id}
                className={'font-semibold'}
            >
                {label}
            </label>
            <input
                readOnly={readonly}
                type="email"
                id={id}
                onChange={onChange}
                className={'border-black border-b-2 h-10 w-full'}
                value={value}
            />
        </div>
    );
};

export default EmailInput;