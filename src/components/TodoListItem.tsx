import {TodoItem} from "../store/types";
import * as React from 'react';
import {
    ListItem, ListItemIcon, Checkbox, ListItemText
    , IconButton, ListItemButton
} from "@mui/material";
import PendingIcon from '@mui/icons-material/Pending';

type Props = {
    item: TodoItem
};

export function TodoListItem(props: Props) {
    const {item: {id, title, description, status}} = props
    return (
        <ListItem
            key={id}
            secondaryAction={status === 'in-progress' &&
            <IconButton edge="end" aria-label="comments">
                <PendingIcon/>
            </IconButton>
            }
            disablePadding
            disabled={status === 'done'}
        >
            <ListItemButton role={undefined} onClick={() => {
            }} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        inputProps={{'aria-labelledby': `item-${id}`}}
                    />
                </ListItemIcon>
                <ListItemText id={`item-${id}`} primary={title} secondary={description}/>
            </ListItemButton>
        </ListItem>
    );
}
