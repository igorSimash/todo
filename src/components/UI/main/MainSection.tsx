import React from 'react';

const MainSection: React.FC<{children: React.ReactNode | React.ReactElement; className?: string}> = ({children, className}) => {
    return (
        <main className={`w-full h-[calc(100%-4rem)] bg-gradient-to-b from-transparent to-lightBlue/50 ${className}`}>
            {children}
        </main>
    );
};

export default MainSection;