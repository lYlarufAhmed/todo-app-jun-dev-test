import {TodoItem} from "../store/types";
import * as React from 'react';
import {TodoListItem} from "./TodoListItem";
import {List, Typography} from "@mui/material";


type Props = {
    items: TodoItem[]
};

export function TodoList(props: Props) {
    const {items} = props
    return (
        <List>
            {items.length ? items.map(item => <TodoListItem item={item} key={item.id}/>) :
                <Typography variant={"h3"}>No Items</Typography>}
        </List>
    );
}
