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
import {useDispatch} from "react-redux";
import {addItem} from "../store/effets";
import {TodoItemStatus, TodoStatusOption} from "../store/types";

type Props = {
    handleClose: () => void
};

const STATUS_OPTIONS: TodoStatusOption[] = [
    {value: 'to-do', label: 'To do'},
    {value: 'in-progress', label: 'In progress'},
    {value: 'done', label: 'Done'},
]

export function NewTodoForm(props: Props) {
    const {handleClose} = props
    const [status, setStatus] = useState<TodoItemStatus>('to-do')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()
    const handleSave = () => {
        // do state management
        dispatch(addItem(title, desc, status))
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
                    {STATUS_OPTIONS.map(op => <MenuItem onClick={() => setStatus(op.value)} key={op.value}
                                                        value={op.value}>{op.label}</MenuItem>)}
                </Select>
            </FormControl>
            <Button variant={"outlined"} color={"warning"} onClick={handleSave}>
                Save
            </Button>
        </Stack>
    );
}