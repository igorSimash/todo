import React from 'react';

const MainHeader: React.FC<{children: React.ReactNode | React.ReactElement}> = ({children}) => {
    return (
        <header className={'w-full h-16 flex justify-between px-10'}>
            {children}
        </header>
    );
};

export default MainHeader;