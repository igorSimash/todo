import React from 'react';

const MainHeader: React.FC<{children: React.ReactNode | React.ReactElement; className?: string}> = ({children, className}) => {
    return (
        <header className={`w-full h-14 flex justify-between px-10 ${className}`}>
            {children}
        </header>
    );
};

export default MainHeader;