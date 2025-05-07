import { useEffect, useRef, useState } from "react"
import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import CircularProgress from '@mui/material/CircularProgress';
import { buttonStyle, smallButtonStyle } from "../themes/componentStyling";

const MusicComponent = ({ index }) => {
    //TODO: Get total music data from father component
    //Just for demo
    const [volume, setVolume] = useState(0.5)
    const [totalMusic, setTotalMusic] = useState(0)
    const [isStart, setIsStart] = useState(false)
    const [currentMusic, setCurrentMusic] = useState(null) //Contain current music detail
    const [musicIndex, setMusicIndex] = useState(index || 0)
    const audioRef = useRef(null)

    //Asynchronous template for fetching API in React   
    useEffect(() => {
        //Set an async function inside useEffect
        const fetchMusicData = async () => {
            const musicData = await getMusicInfo()
            setTotalMusic(musicData.length)
            setCurrentMusic(musicData[musicIndex]);
        }
        console.log(musicIndex)
        //Call it inside useEffect
        fetchMusicData()
    }, [musicIndex])    //useEffect only rerun when musicIndex change

    const toggleButton = () => {
        const audio = audioRef.current
        if (!audio) return
        isStart ? audio.pause() : audio.play()
        setIsStart(!isStart)
    }

    const nextMusic = () => {
        //Temp code
        if (musicIndex < totalMusic - 1) setMusicIndex(musicIndex + 1)
    }

    const prevMusic = () => {
        //Temp code
        if (musicIndex > 0) setMusicIndex(musicIndex - 1)
    }

    const changeVolume = (event, newValue) => {
        const audio = audioRef.current
        setVolume(newValue / 100)
        audio.volume = volume
    }

    return (
        <div className="music-bottom-component">
            {currentMusic ? (
                <>
                    <img src={currentMusic.urlThumbnail} alt="" />
                    <div className="music-bottom-component--detail">
                        <h5 style={{width: '15rem', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                            {currentMusic.title.replaceAll(".mp3", "")}
                        </h5>
                        <p>{currentMusic.artist}</p>
                    </div>
                    <audio ref={audioRef} src={currentMusic.urlMusic}></audio>
                    <div style={{ display: "flex" }}>
                        <div id="prev-button">
                            <SkipPreviousIcon onClick={prevMusic} sx={buttonStyle} />
                        </div>
                        <div id="play-button">
                            {isStart ?
                                <PauseIcon onClick={toggleButton} sx={buttonStyle} /> :
                                <PlayArrowIcon onClick={toggleButton} sx={buttonStyle} />
                            }
                        </div>
                        <div id="next-button">
                            <SkipNextIcon onClick={nextMusic} sx={buttonStyle} />
                        </div>
                        <div style={{ display: 'flex', width: '13rem', marginLeft: '2rem', alignItems: 'center' }}>
                            <VolumeDown sx={smallButtonStyle} />
                            <Slider aria-label="Volume" defaultValue={50} onChange={changeVolume} sx={{'margin': 'auto 0.5rem'}} />
                            <VolumeUp sx={smallButtonStyle} />
                        </div>
                    </div>
                </>
            ) : <CircularProgress />}
        </div>
    )
}

export default MusicComponent