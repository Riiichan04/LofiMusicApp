import '../themes/theme.css'
import '../index.css'
import MusicComponent from '../components/MusicComponent'
import Header from '../components/Header'
import ComingSoon from './ComingSoon'
import { useEffect, useState } from 'react'

const Home = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || 'light-theme')

    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme')
        document.body.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme]);

    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            <MusicComponent />
        </>
    )
}

export default Home