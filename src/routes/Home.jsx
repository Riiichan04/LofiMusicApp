import '../themes/dark.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'
import TaskTableComponent from '../components/TaskTable'

const Home = () => {
    return (
        <>
            <Header/>
            <MusicComponent />
            <TaskTableComponent displayState={true}/>
        </>
    )
}

export default Home