import React, {useEffect, useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {ApplicationState, TodoItem} from "./store/types";
import {Box, CssBaseline, Fab} from '@mui/material'
import {TopHeader} from "./components/TopHeader";
import AddIcon from "@mui/icons-material/Add"
import {NewTodoForm} from "./components/NewTodoForm";
import {ModalContainer} from "./components/ModalContainer";
import {UserDetail} from "./components/UserDetail";
import {useSelector} from "react-redux";

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
const TABS: string[] = ['all', 'to-do', 'done', 'in-progress']

function App() {
    const tasks = useSelector((state: ApplicationState) => state.tasks)
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)
    const [currTabIndx, setCurrTabIndx] = useState(0)
    const [currentModal, setCurrentModal] = useState('')
    const [currTasks, setTasks] = useState<TodoItem[] | []>(tasks)

    useEffect(() => {
        if (currTabIndx === 0) setTasks(tasks)
        else
            setTasks(tasks.filter(task => task.status === TABS[currTabIndx]))
    }, [currTabIndx, TABS, tasks])

    const handleCloseNetTaskModal = () => {
        setIsNewTaskModalOpen(false)
        setCurrentModal('')
    }
    const handleOpenNetTaskModal = (modalName: string) => {
        setCurrentModal(modalName)
        setIsNewTaskModalOpen(true)
    }

    const renderModalContent = () => {
        switch (currentModal) {
            case "profile":
                return (<UserDetail/>)
            default:
                return (<NewTodoForm handleClose={handleCloseNetTaskModal}/>)
        }

    }

    const handleTabChange = (tabIndex: number) => setCurrTabIndx(tabIndex)
    return (
        <Box sx={{display: 'flex', position: 'relative', minHeight: '100vh'}}>
            <CssBaseline/>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <TopHeader tabs={TABS} handleOpenUserDetailModal={handleOpenNetTaskModal}
                           handleTabChange={handleTabChange} currentTabIndex={currTabIndx}/>
                <Box component="main" sx={{flex: 1, py: 6, px: 4, bgcolor: '#eaeff1'}}>
                    <TodoList items={currTasks}/>
                </Box>
            </Box>
            <Fab color="primary" sx={{
                position: 'absolute',
                bottom: 16,
                right: 46,
            }} aria-label="add" onClick={() => handleOpenNetTaskModal('new-todo')}>
                <AddIcon/>
            </Fab>
            <ModalContainer open={isNewTaskModalOpen} handleClose={handleCloseNetTaskModal}>
                {renderModalContent()}
            </ModalContainer>
        </Box>
    );
}

export default App;
