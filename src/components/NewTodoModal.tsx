// @flow
import {
    Box,
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import * as React from 'react';
import {useState} from "react";

type Props = {
    open: boolean,
    handleClose: () => void
};

export function NewTodoModal(props: Props) {
    const {open, handleClose} = props
    const [status, setStatus] = useState('to-do')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
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

                <Stack direction={"column"} gap={2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new Todo
                    </Typography>
                    <FormControl>
                        <TextField value={title} onChange={event => setTitle(event.target.value)} name={"title"}
                                   variant={"outlined"} placeholder={"Title"}/>
                    </FormControl>
                    <FormControl>
                        <TextField value={desc} onChange={event => setDesc(event.target.value)} multiline minRows={"3"}
                                   maxRows={"6"} name={"description"} variant={"outlined"}
                                   placeholder={"Description"}/>
                    </FormControl>
                    <FormControl variant={"filled"}>
                        <InputLabel>Status</InputLabel>
                        <Select value={status}>
                            {[
                                {value: 'to-do', label: 'To do'},
                                {value: 'in-progress', label: 'In progress'},
                                {value: 'done', label: 'Done'},
                            ].map(op => <MenuItem onClick={() => setStatus(op.value)} key={op.value}
                                                  value={op.value}>{op.label}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
        </Modal>
    );
}