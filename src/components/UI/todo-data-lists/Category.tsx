import React from 'react';

const Category: React.FC<{name: string; onClick?: () => void; className?: string}> = ({name, onClick, className}) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer  rounded-lg py-1.5 pl-1 
                hover:bg-gray-300 transition-all ${className} tracking-wide`}>
            {name}
        </div>
    );
};

export default Category;