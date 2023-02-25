import React from 'react';

const Category: React.FC<{name: string; onClick?: () => void; className?: string}> = ({name, onClick, className}) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer text-lg font-medium text-solidBlue rounded-lg py-0.5 px-1 
                hover:bg-gray-300 transition-all ${className}`}>
            {name}
        </div>
    );
};

export default Category;