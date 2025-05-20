import '../themes/theme.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'
import { TaskTableComponent, TaskListComponent } from '../components/NewTaskComponent'
import FeatureBarComponent from '../components/FeatureBarComponent'
import { useState, useEffect } from 'react'
import TaskBoardComponent from '../components/TaskBoardComponent'
import SettingComponent from '../components/SettingComponent'


const Home = () => {
    const [taskBoardDisplay, setTaskBoardDisplay] = useState(false)
    const [settingDisplay, setSettingDisplayState] = useState(false)

    const [newTaskDisplayState, setNewTaskDisplayState] = useState(false)
    const [newListDisplayState, setNewListDisplayState] = useState(false)

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || 'light-theme')

    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme')
        document.body.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme]);

    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            <div id="background">
                <video
                    muted autoPlay loop
                    src={import.meta.env.VITE_TEMP_BACKGROUND_URL}>
                </video>
            </div>
            <footer>
                <MusicComponent />
                <FeatureBarComponent
                    displayTaskBoard={setTaskBoardDisplay}
                    displaySetting={setSettingDisplayState}
                />
            </footer>
            <TaskBoardComponent
                tableDisplayState={taskBoardDisplay}
                setTableDisplay={setTaskBoardDisplay}
                setNewTaskDisplay={setNewTaskDisplayState}
                setNewListDisplay={setNewListDisplayState}
            />
            {newTaskDisplayState ?
                <TaskTableComponent
                    displayState={newTaskDisplayState}
                    setDisplayState={() => setNewTaskDisplayState(false)} /> :
                <></>
            }
            {newListDisplayState ?
                <TaskListComponent
                    displayState={newListDisplayState}
                    setDisplayState={() => setNewListDisplayState(false)} /> :
                <></>
            }
            {settingDisplay ?
                <SettingComponent displayState={settingDisplay} setDisplayState={setSettingDisplayState} />
                : <></>
            }
        </>
    )
}
export default Home