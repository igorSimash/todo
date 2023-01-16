import React from 'react';

interface IPasswordInput {
    label: string;
    id: string;
}

const PasswordInput: React.FC<IPasswordInput> = ({label,id}) => {
    return (
        <div className={'flex flex-col w-full'}>
            <label
                htmlFor={id}
                className={'font-semibold'}
            >
                {label}
            </label>
            <input
                type="password"
                id={id}
                className={'border-black border-b-2 h-10 w-full'}
            />
        </div>
    );
};

export default PasswordInput;