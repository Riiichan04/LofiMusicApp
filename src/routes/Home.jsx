import '../themes/dark.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'

const Home = () => {
    return (
        <>
            <Header/>
            <MusicComponent index={2} />
        </>
    )
}

export default Home