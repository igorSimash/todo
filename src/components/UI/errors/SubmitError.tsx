import React from 'react';

const SubmitError: React.FC<{ className: string, children: string }> = ({className, children}) => {
    

    return (
        <span className={`text-red-500 font-semibold h-6 ${className}`}>
            {children}
        </span>
    );
};

export default SubmitError;