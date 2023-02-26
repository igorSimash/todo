import React from 'react';

const MainSection: React.FC<{children: React.ReactNode | React.ReactElement; className?: string}> = ({children, className}) => {
    return (
        <main className={`w-full h-[calc(100%-3.5rem)] ${className}`}>
            {children}
        </main>
    );
};

export default MainSection;