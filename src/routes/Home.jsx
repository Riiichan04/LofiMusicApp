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

    return (
        <>
            <Header/>
            <footer>
                <MusicComponent />
                <FeatureBarComponent taskBoardDisplayStateHandle={setTaskBoardDisplay} />
            </footer>
            <TaskBoardComponent tableDisplayState={taskBoardDisplay} setTableDisplay={setTaskBoardDisplay}/>
        </>
    )
}

export default Home