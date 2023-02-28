import React from 'react';

interface IDateTimeInput {
    value?: string | null;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const DateTimeInput: React.FC<IDateTimeInput> = ({value, onChange}) => {
    return (
        <input
            className={'bg-transparent py-1.5 pl-1 pr-2 w-full'}
            type={"datetime-local"}
            value={value!}
            onChange={onChange}
        />
    );
};

export default DateTimeInput;