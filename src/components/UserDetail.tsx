import * as React from 'react';
import {Avatar, ImageListItem, List, ListItem, ListItemText, Stack} from "@mui/material";


export function UserDetail() {
    return (
        <List>
            <ListItem sx={{justifyContent: "center"}}>
                <ImageListItem>
                    <Avatar
                        src="https://free.clipartof.com/160-Geisha-Avatar-Character-Free-Vector-Clipart-Illustration.jpg"
                        variant={"square"}
                        sx={{height: 100, width: 100}}
                        alt="My Avatar"/>
                </ImageListItem>
            </ListItem>
            <ListItem>
                <ListItemText primary={"Name"} secondary={"Maruf"}/>
                <ListItemText primary={"DOB"} secondary={"1998"}/>
            </ListItem>
        </List>
    );
}