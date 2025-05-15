import '../themes/light.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'
import TaskTableComponent from '../components/NewTaskComponent'
import FeatureBarComponent from '../components/FeatureBarComponent'
import { useState } from 'react'


const Home = () => {
    const [taskBoardDisplay, setTaskBoardDisplay] = useState(false)

    return (
        <>
            <Header/>
            <footer>
                <MusicComponent />
                <FeatureBarComponent taskBoardDisplayStateHandle={setTaskBoardDisplay} />
            </footer>
            <TaskTableComponent displayState={taskBoardDisplay} setDisplayState={setTaskBoardDisplay}/>
        </>
    )
}

export default Home