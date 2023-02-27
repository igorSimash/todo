import React from 'react';

interface IInputNoBorder {
    className?: string;
    value?: string | null;
    onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    placeholder?: string;
}
const InputNoBorder: React.FC<IInputNoBorder> = ({className, value, onChange, placeholder}) => {
    return (
        <textarea
            rows={1}
            placeholder={placeholder}
            className={`bg-transparent border-black/70 focus:border-[1px] resize-none rounded-md py-0.5 px-1.5 w-full ${className}`}
            value={value || ''}
            onChange={onChange}
        />

    );
};

export default InputNoBorder;