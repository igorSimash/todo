import React from 'react';
type ReactChildren = React.ReactNode | React.ReactElement;
interface ICenterFlexProps {
    children?: ReactChildren
    className?: string;
}

const CenterFlexScreen: React.FC<ICenterFlexProps> = ({children, className}) => {
    return (
        <div className={`h-screen w-screen flex flex-col justify-center items-center text-center ${className}`}>
            {children}
        </div>
    );
};

export default CenterFlexScreen;