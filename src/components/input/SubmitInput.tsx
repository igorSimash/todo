import React from 'react';

interface ISubmitInput {
    value: string;
}

const SubmitInput :React.FC<ISubmitInput> = ({value}) => {
    return (
        <input
            type="submit"
            value={value}
            className={'w-full h-14 bg-black text-white rounded-2xl cursor-pointer'}
        />
    );
};

export default SubmitInput;