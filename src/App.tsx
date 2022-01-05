import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./store/types";
import {Box, CssBaseline, Fab} from '@mui/material'
import {TopHeader} from "./components/TopHeader";
import AddIcon from "@mui/icons-material/Add"
import {NewTodoModal} from "./components/NewTodoModal";

const items: TodoItem[] = [
    {
        id: 43343,
        title: 'Urgent for university',
        description: 'Parasite research',
        status: "to-do"
    }, {
        id: 434343,
        title: 'Attend Lab',
        description: 'Goto lab',
        status: "done"
    }, {
        id: 12323,
        title: 'Grocery shop',
        description: 'Buy tissues',
        status: "in-progress"
    },
]

function App() {
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)

    const handleCloseNetTaskModal = () => setIsNewTaskModalOpen(false)
    const handleOpenNetTaskModal = () => setIsNewTaskModalOpen(true)
    return (
        <Box sx={{display: 'flex', position: 'relative', minHeight: '100vh'}}>
            <CssBaseline/>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <TopHeader/>
                <Box component="main" sx={{flex: 1, py: 6, px: 4, bgcolor: '#eaeff1'}}>
                    <TodoList items={items}/>
                </Box>
            </Box>
            <Fab color="primary" sx={{
                position: 'absolute',
                bottom: 16,
                right: 46,
            }} aria-label="add" onClick={handleOpenNetTaskModal}>
                <AddIcon/>
            </Fab>
            <NewTodoModal open={isNewTaskModalOpen} handleClose={handleCloseNetTaskModal}/>
        </Box>
    );
}

export default App;
