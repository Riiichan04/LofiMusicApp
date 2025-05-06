import { useEffect, useRef, useState } from "react"
import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MusicComponent = ({ index }) => {
    const [isStart, setIsStart] = useState(false)
    const [currentMusic, setCurrentMusic] = useState(null) //Contain current music detail
    const musicIndex = index || 0
    const audioRef = useRef(null)

    //Asynchronous template for fetching API in React   
    useEffect(() => {
        //Set an async function inside useEffect
        const fetchMusicData = async () => {
            const musicData = await getMusicInfo()
            setCurrentMusic(musicData[musicIndex]);
        }

        //Call it inside useEffect
        fetchMusicData()
    }, [musicIndex])

    const toggleButton = () => {
        const audio = audioRef.current
        if (!audio) return
        isStart ? audio.pause() : audio.play()
        setIsStart(!isStart)
    }

    return (   
        <div className="music-bottom-component">
            {currentMusic ? (
                <>
                    <img src={currentMusic.urlThumbnail} alt="" />
                    <div className="music-bottom-component--detail">
                        <h5>
                            {currentMusic.title.replaceAll(".mp3", "")}
                        </h5>
                        <p>{currentMusic.artist}</p>
                    </div>
                    <audio ref={audioRef} src={currentMusic.urlMusic}></audio>
                    <div>
                        <div id="play-button">
                            {isStart ?
                                <PauseIcon onClick={toggleButton} sx={{ "color": "var(--text-color)", "fontSize": "var(--h2)" }} /> :
                                <PlayArrowIcon onClick={toggleButton} sx={{ "color": "var(--text-color)", "fontSize": "var(--h2)" }} />
                            }
                        </div>
                    </div>
                </>
            ) : <></>}
        </div>
    )
}

export default MusicComponent