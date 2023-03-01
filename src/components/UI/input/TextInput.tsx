import React from 'react';

interface ITextInput {
    className?: string;
    value?: string | null;

    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

    placeholder?: string;
}

const TextInput: React.FC<ITextInput> = ({onChange, placeholder, value, className}) => {
    return (
        <input
            placeholder={placeholder}
            className={`bg-transparent border-black/70 resize-none rounded-md py-0.5 px-1.5 ${className}`}
            value={value || ''}
            onChange={onChange}
        />
    );
};

export default TextInput;