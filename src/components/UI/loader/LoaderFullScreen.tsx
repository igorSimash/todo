import React from 'react';
import CenterFlexScreen from "../screen/CenterFlexScreen";

const LoaderFullScreen: React.FC = () => {
    return (
        <CenterFlexScreen className={'gap-8'}>
            <div className={'w-36 h-36 animate-spin border-8 border-blue-200 border-t-blue-400 rounded-full'}></div>
            <span className={'font-semibold text-xl text-blue-500 animate-pulse'}>Loading...</span>
        </CenterFlexScreen>
    );
};

export default LoaderFullScreen;