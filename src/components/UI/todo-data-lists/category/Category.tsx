import React, {useState} from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteDialog from "../../dialog/delete-dialog/DeleteDialog";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../../../redux/action-creators/fetchTodos";

interface ICategory {
    name: string;
    onClick?: () => void;
    className?: string;
    deletable?: boolean;
}

const Category: React.FC<ICategory> = ({name, onClick, className, deletable= false}) => {
    const [todoHovered, setTodoHovered] = useState(false);
    const [wantToDelete, setWantToDelete] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await fetch(process.env.REACT_APP_API_TODO_CATEGORY as string,
            {
                credentials: 'include',
                mode: 'cors',
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({category: name})
            });
        dispatch(fetchTodos());
    };
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer text-md rounded-md py-1 px-1 flex items-center gap-1.5 
                hover:bg-lightBlue/60 transition-all overflow-x-hidden overflow ${className}`}
            onMouseEnter={(e) => setTodoHovered(true)}
            onMouseLeave={(e) => setTodoHovered(false)}>
            <CircleIcon sx={{color: '#0396a6', fontSize: '10px'}}/>
            <div className={'flex justify-between w-full'}>
                <span className={`font-s`}>{name}</span>
                {
                    deletable
                    &&
                    <div>
                        <DeleteForeverIcon
                            className={`text-gray-600 rounded-md hover:text-black ${todoHovered ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => setWantToDelete(true)}
                        />
                        <DeleteDialog onClose={() => setWantToDelete(false)} onDelete={handleDelete} isOpen={wantToDelete}>
                            <div>
                                Are you sure you want to delete category
                                <span className={'font-bold'}> "{name}" </span>
                                ?
                            </div>
                        </DeleteDialog>
                    </div>
                }
            </div>
        </div>
    );
};

export default Category;