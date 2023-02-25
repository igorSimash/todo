import React from 'react';

interface ISubmitInput {
    value: string;
    onClick: Function;
}

const SubmitInput :React.FC<ISubmitInput> = ({value, onClick}) => {

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        onClick();
    }

    return (
        <input
            type="submit"
            value={value}
            onClick={handleSubmit}
            className={'w-full h-14 bg-solidBlue text-white rounded-2xl cursor-pointer font-medium transition-all hover:bg-opacity-80'}
        />
    );
};

export default SubmitInput;