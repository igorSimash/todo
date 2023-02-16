import React from 'react';

const LoaderFullScreen: React.FC = () => {
    return (
        <div className={'h-screen w-screen flex flex-col gap-8 justify-center items-center'}>
            <div className={'w-36 h-36 animate-spin border-8 border-blue-200 border-t-blue-400 rounded-full'}>

            </div>
            <span className={'font-semibold text-xl text-blue-500 animate-pulse'}>Loading...</span>
        </div>
    );
};

export default LoaderFullScreen;