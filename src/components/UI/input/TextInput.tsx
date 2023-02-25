import React from 'react';

interface ITextInput {
    label: string;
    id: string;
}

const TextInput: React.FC<ITextInput> = ({label,id}) => {
    return (
        <div className={'flex flex-col w-full'}>
            <label
                htmlFor={id}
                className={'font-semibold'}
            >
                {label}
            </label>
            <input
                type="text"
                   id={id}
                className={'border-black border-b-2 h-10 w-full'}
            />
        </div>
    );
};

export default TextInput;