import '../themes/light.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'
import TaskTableComponent from '../components/NewTaskComponent'
import FeatureBarComponent from '../components/FeatureBarComponent'
import { useState } from 'react'
import TaskBoardComponent from '../components/TaskBoardComponent'


const Home = () => {
    const [taskBoardDisplay, setTaskBoardDisplay] = useState(false)
    const [newTaskDisplayState, setNewTaskDisplayState] = useState(false)

    return (
        <>
            <Header />
            <footer>
                <MusicComponent />
                {/* 4.1.1. Click vào nút bảng công việc */}
                <FeatureBarComponent displayTaskBoard={setTaskBoardDisplay} />
            </footer>
            <TaskBoardComponent
                tableDisplayState={taskBoardDisplay} setTableDisplay={setTaskBoardDisplay}
                setNewTaskDisplay={setNewTaskDisplayState}
            />
            {newTaskDisplayState ?
                <TaskTableComponent
                    displayState={newTaskDisplayState}
                    setDisplayState={() => setNewTaskDisplayState(false)} /> :
                <></>
            }
        </>
    )
}

export default Home