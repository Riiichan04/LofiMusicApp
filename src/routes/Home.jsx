import '../themes/light.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'
import TaskTableComponent from '../components/NewTaskComponent'
import FeatureBarComponent from '../components/FeatureBarComponent'


const Home = () => {
    return (
        <>
            <Header/>
            <footer>
                <MusicComponent />
                <FeatureBarComponent />
            </footer>
            <TaskTableComponent displayState={true}/>
        </>
    )
}

export default Home