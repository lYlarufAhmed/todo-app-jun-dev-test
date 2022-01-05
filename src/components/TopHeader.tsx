// @flow
import {AppBar, Avatar, Grid, Tabs, Toolbar, Tab, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

type Props = {
    handleOpenUserDetailModal: (modalName: string) => void
};

export function TopHeader(props: Props) {
    const {handleOpenUserDetailModal} = props
    return (
        <div>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center" justifyContent={"flex-end"}>
                        <Grid item>
                            <IconButton color="inherit" sx={{p: 0.5}}
                                        onClick={() => handleOpenUserDetailModal('profile')}>
                                <Avatar
                                    src="https://free.clipartof.com/160-Geisha-Avatar-Character-Free-Vector-Clipart-Illustration.jpg"
                                    alt="My Avatar"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{zIndex: 0}}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                A Simple Todo App
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{zIndex: 0}}>
                <Tabs value={0} textColor="inherit">
                    <Tab label="All"/>
                    <Tab label="To-do"/>
                    <Tab label="Done"/>
                    <Tab label="In Progress"/>
                </Tabs>
            </AppBar>
        </div>
    )
}