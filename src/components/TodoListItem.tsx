import {TodoItem} from "../store/types";
import * as React from 'react';
import {
    ListItem, ListItemIcon, Checkbox, ListItemText
    , IconButton, ListItemButton, ButtonGroup
} from "@mui/material";
import PendingIcon from '@mui/icons-material/Pending';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useDispatch} from "react-redux";
import {deleteItem, updateItem} from "../store/effets";

type Props = {
    item: TodoItem
};

export function TodoListItem(props: Props) {
    const {item: {id, title, description, status}} = props
    const dispatch = useDispatch()
    const handleTaskCompleteToggle = () => {
        dispatch(updateItem(id, 'status', status === 'done' ? 'to-do' : 'done'))
    }
    const handleTaskPendingToggle = () => {
        dispatch(updateItem(id, 'status', status === 'in-progress' ? 'to-do' : 'in-progress'))
    }
    const handleTaskDelete = () => {
        dispatch(deleteItem(id))
    }
    return (
        <ListItem
            key={id}
            secondaryAction={
                <ButtonGroup>
                    <IconButton onClick={handleTaskPendingToggle} edge="start" aria-label="pending">

                        <PendingIcon color={status === "in-progress" ? 'success' : 'inherit'}/>
                    </IconButton>
                    <IconButton onClick={handleTaskDelete} edge={"end"} aria-label={"delete"}>
                        <DeleteForeverIcon/>
                    </IconButton>
                </ButtonGroup>
            }
            disablePadding
            disabled={status === 'done'}
        >
            <ListItemButton role={undefined} onClick={handleTaskCompleteToggle} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        inputProps={{'aria-labelledby': `item-${id}`}}
                        checked={status === 'done'}
                    />
                </ListItemIcon>
                <ListItemText id={`item-${id}`} primary={title} secondary={description}/>
            </ListItemButton>
        </ListItem>
    );
}
