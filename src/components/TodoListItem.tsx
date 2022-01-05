import {TodoItem} from "../store/types";
import * as React from 'react';
import {
    ListItem, ListItemIcon, Checkbox, ListItemText
    , IconButton, ListItemButton
} from "@mui/material";
import PendingIcon from '@mui/icons-material/Pending';
import {useDispatch} from "react-redux";
import {updateItem} from "../store/effets";

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
    return (
        <ListItem
            key={id}
            secondaryAction={
                <IconButton onClick={handleTaskPendingToggle} edge="end" aria-label="comments">

                    <PendingIcon color={status === "in-progress" ? 'success' : 'inherit'}/>
                </IconButton>
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
