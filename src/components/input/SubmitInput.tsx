import React from 'react';

interface ISubmitInput {
    value: string;
    onClick: Function;
}

const SubmitInput :React.FC<ISubmitInput> = ({value, onClick}) => {

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        console.log('ggood')
        e.preventDefault();
        onClick();
    }

    return (
        <input
            type="submit"
            value={value}
            onClick={handleSubmit}
            className={'w-full h-14 bg-black text-white rounded-2xl cursor-pointer'}
        />
    );
};

export default SubmitInput;