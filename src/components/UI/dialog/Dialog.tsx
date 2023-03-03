import React from 'react';
import {Dialog as MUIDialog} from '@mui/material';
interface IDialog {
    onClose(): void;
    isOpen: boolean;
    children: React.ReactElement
}

const Dialog:React.FC<IDialog> = ({children, isOpen, onClose}) => {
    return (
        <MUIDialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={'bg-none'}
        >
            {children}
        </MUIDialog>
    );
};

export default Dialog;
