// @flow
import {
     Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import * as React from 'react';
import {useState} from "react";

type Props = {
    handleClose: () => void
};

export function NewTodoForm(props: Props) {
    const {handleClose} = props
    const [status, setStatus] = useState('to-do')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const handleSave = () => {
        // do state management
        handleClose()
    }
    return (
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
            <Button variant={"outlined"} color={"warning"} onClick={handleSave}>
                Save
            </Button>
        </Stack>
    );
}