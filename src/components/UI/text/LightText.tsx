import React from 'react';

const LightText: React.FC<{children: string}> = ({children}) => {
    return (
        <span className={'font-light tracking-wide opacity-75'}>
            {children}
        </span>
    );
};

export default LightText;