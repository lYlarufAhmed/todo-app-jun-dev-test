// @flow
import {Box, Modal} from '@mui/material';
import * as React from 'react';
import {ReactElement} from "react";

type Props = {
    open: boolean,
    handleClose: () => void,
    children: ReactElement
};

export function ModalContainer(props: Props) {
    const {open, handleClose} = props
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                {props.children}
            </Box>
        </Modal>
    );
}