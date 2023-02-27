import React from 'react';

const Category: React.FC<{name: string; onClick?: () => void; className?: string}> = ({name, onClick, className}) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer text-md rounded-md py-0.5 px-1 
                hover:bg-lightBlue/60 transition-all ${className}`}>
            {name}
        </div>
    );
};

export default Category;