import React from 'react';
import CenterFlexScreen from "../screen/CenterFlexScreen";

const LoaderFullScreen: React.FC<{className?: string;}> = ({className}) => {
    return (
        <CenterFlexScreen className={`gap-8 bg-gradient-to-b from-transparent to-lightBlue/50 ${className}`}>
            <div className={'w-36 h-36 animate-spin border-8 border-lightBlue border-t-solidBlue rounded-full'}></div>
            <span className={'font-semibold text-xl text-solidBlue animate-pulse'}>Loading...</span>
        </CenterFlexScreen>
    );
};

export default LoaderFullScreen;