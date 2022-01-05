import * as React from 'react';
import {Avatar, CircularProgress, ImageListItem, List, ListItem, ListItemText} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../store/effets"
import {ApplicationState} from "../store/types";


export function UserDetail() {
    const {isLoading, user} = useSelector(({loading: {user: isLoading}, user}: ApplicationState) => ({isLoading, user}))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])
    return (
        <List>
            {isLoading ? <ListItem sx={{display: 'flex', justifyContent: "center"}}>
                <CircularProgress/>
            </ListItem> : (
                <>
                    <ImageListItem sx={{display: 'flex', justifyContent: "center"}}>
                        <Avatar
                            src="https://free.clipartof.com/160-Geisha-Avatar-Character-Free-Vector-Clipart-Illustration.jpg"
                            variant={"square"}
                            sx={{height: 100, width: 100}}
                            alt="My Avatar"/>
                    </ImageListItem>
                    <ListItem>
                        <ListItemText primary={"Name"} secondary={user.name}/>
                        <ListItemText primary={"DOB"} secondary={user.birth_year}/>
                    </ListItem>
                </>
            )}
        </List>
    );
}