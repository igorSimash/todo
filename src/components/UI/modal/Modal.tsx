import React, {ReactElement} from 'react';
import {Backdrop, Modal as MUIModal} from "@mui/material";

interface IModal {
    children: ReactElement;
    modalIsOpen: boolean;
    closeModal(): void;
}

const Modal: React.FC<IModal> = ({children, modalIsOpen, closeModal}) => {
    return (
        <MUIModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalIsOpen}
            onClose={closeModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}

        >
            {children}
        </MUIModal>
    );
};

export default Modal;