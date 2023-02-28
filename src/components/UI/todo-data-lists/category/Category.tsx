import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
const Category: React.FC<{name: string; onClick?: () => void; className?: string}> = ({name, onClick, className}) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer text-md rounded-md py-1 px-1 flex items-center gap-1.5
                hover:bg-lightBlue/60 transition-all overflow-x-hidden overflow ${className}`}>
            <CircleIcon sx={{color: '#0396a6', fontSize: '10px'}}/>
            <span className={`font-s`}>{name}</span>
        </div>
    );
};

export default Category;