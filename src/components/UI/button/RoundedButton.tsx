import React from 'react';

interface IRoundedButton {
    children?: React.ReactNode;
    className?: string;
    onClick?(): void;
}

const RoundedButton: React.FC<IRoundedButton> = ({children, className, onClick}) => {
    return (
        <button
            className={` rounded-lg h-fit py-1.5 px-3 font-medium ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default RoundedButton;