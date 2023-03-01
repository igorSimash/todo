import React from 'react';

interface IDateTimeInput {
    value?: string | null;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    className?: string;
}

const DateTimeInput: React.FC<IDateTimeInput> = ({value, onChange, className}) => {
    return (
        <input
            className={`bg-transparent py-1.5 pl-1 pr-2 ${className}`}
            type={"datetime-local"}
            value={value!}
            onChange={onChange}
        />
    );
};

export default DateTimeInput;