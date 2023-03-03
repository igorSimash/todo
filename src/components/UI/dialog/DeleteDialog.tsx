import React from 'react';
import Dialog from "./Dialog";
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';
import RoundedButton from "../button/RoundedButton";

interface IDeleteDialog {
    onClose(): void;
    onDelete?(): void;
    isOpen: boolean;
    itemName?: string;
    children?: React.ReactElement;
}

const DeleteDialog:React.FC<IDeleteDialog> = ({onClose, isOpen, onDelete, children}) => {
    return (
        <Dialog
            onClose={onClose}
            isOpen={isOpen}
        >
            <div className={'bg-coolWhite flex flex-col px-4 w-[500px]'}>
                <div className={'flex justify-between items-center pt-4'}>
                    <InfoIcon/>
                    <ClearIcon className={'cursor-pointer'} onClick={onClose}/>
                </div>
                <div className={'h-28 font-medium flex items-center'}>
                    {children}
                </div>
                <div className={'flex justify-end items-center gap-3 h-14'}>
                    <RoundedButton className={'bg-gray-300'} onClick={onClose}>Cancel</RoundedButton>
                    <RoundedButton className={'bg-mediumBlue'} onClick={onDelete}>Delete</RoundedButton>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteDialog;