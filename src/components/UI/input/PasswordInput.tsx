import React from 'react';

interface IPasswordInput {
    label: string;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput: React.FC<IPasswordInput> = ({label,id, onChange}) => {
    return (
        <div className={'flex flex-col w-full bg-transparent text-left'}>
            <label
                htmlFor={id}
                className={'font-semibold'}
            >
                {label}
            </label>
            <input
                onChange={onChange}
                type="password"
                id={id}
                className={'border-black border-b-2 h-10 w-full bg-transparent'}
            />
        </div>
    );
};

export default PasswordInput;