import { useEffect, useRef, useState } from "react"
import { getMusicInfo } from "../api/musicApi"
import '../styles/music-component.css'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import CircularProgress from '@mui/material/CircularProgress';
import { buttonStyle, smallButtonStyle } from "../themes/componentStyling";

const MusicComponent = ({ index }) => {
    //TODO: Get total music data from father component
    //Just for demo
    const [listMusic, setListMusic] = useState([])  //Contain list music
    const [volume, setVolume] = useState(0.5)   //Current volume
    const [totalMusic, setTotalMusic] = useState(0) //Music quantity
    const [isStart, setIsStart] = useState(false)   //Is music playing
    const [currentMusic, setCurrentMusic] = useState(null) //Contain current music detail
    const [musicIndex, setMusicIndex] = useState(index || 0)    //Current music index
    const [isRepeat, setRepeat] = useState(false)   //For repeat music
    const [isShuffle, setShuffle] = useState(false) //For shuffle music
    const audioRef = useRef(null)
    // const [listMusic, setListMusic] = useState([])

    useEffect(() => {
        //Set an async function inside useEffect
        const fetchMusicData = async () => {
            //Just recall to api only if listMusic contain nothing
            const musicData = listMusic.length === 0 ? await getMusicInfo() : listMusic
            setTotalMusic(musicData.length)
            setCurrentMusic(musicData[musicIndex]);
            setListMusic(musicData)
        }
        //Call it inside useEffect
        fetchMusicData()


    }, [musicIndex, listMusic])    //useEffect only rerun when musicIndex change

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

    const onMusicEnd = () => {
        if (isShuffle) {
            let randomValue = Math.floor(Math.random() * (totalMusic - 1))
            setMusicIndex(musicIndex === randomValue ? randomValue + 1 : randomValue)
        }
        else setMusicIndex(musicIndex + 1 < totalMusic ? musicIndex + 1 : 0)
    }

    const repeatMusic = () => {
        setRepeat(state => isShuffle ? state : !state)
    }

    const shuffleMusic = () => {
        setShuffle(state => isRepeat ? state : !state)
    }

    return (
        <>
            <div className="music-bottom-component">
                {currentMusic ? (
                    <>
                        <img src={currentMusic.urlThumbnail} alt="" />
                        <div className="music-bottom-component--detail">
                            <h5 style={{ width: '15rem', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                {currentMusic.title.replaceAll(".mp3", "")}
                            </h5>
                            <p>{currentMusic.artist}</p>
                        </div>
                        <audio
                            loop={isRepeat}
                            ref={audioRef}
                            src={currentMusic.urlMusic}
                            onEnded={onMusicEnd}
                            onLoadedData={() => { if (isStart && currentMusic) audioRef.current.play() }}
                        >
                        </audio>

                    </>
                ) : <CircularProgress />}
                <div style={{ display: "flex" }}>
                    <div id="prev-button" className={musicIndex === 0 ? "button-disabled" : ""}>
                        <SkipPreviousIcon onClick={prevMusic} sx={buttonStyle} />
                    </div>
                    <div id="play-button">
                        {isStart ?
                            <PauseIcon onClick={toggleButton} sx={buttonStyle} /> :
                            <PlayArrowIcon onClick={toggleButton} sx={buttonStyle} />
                        }
                    </div>
                    <div id="next-button" className={musicIndex === totalMusic - 1 ? "button-disabled" : ""}>
                        <SkipNextIcon onClick={nextMusic} sx={buttonStyle} />
                    </div>
                    <div id="repeat-button" className={isRepeat ? "" : "button-disabled"} style={{ margin: 'auto 0.5rem auto 1.5rem' }}>
                        <RepeatRoundedIcon onClick={repeatMusic} sx={buttonStyle} />
                    </div>
                    <div id="shuffle-button" className={isShuffle ? "" : "button-disabled"} style={{ margin: 'auto 0.5rem' }}>
                        <ShuffleRoundedIcon onClick={shuffleMusic} sx={buttonStyle} />
                    </div>

                    <div style={{ display: 'flex', width: '13rem', marginLeft: '2rem', alignItems: 'center' }}>
                        <VolumeDown sx={smallButtonStyle} />
                        <Slider aria-label="Volume" defaultValue={50} onChange={changeVolume} sx={{ 'margin': 'auto 0.5rem' }} />
                        <VolumeUp sx={smallButtonStyle} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicComponent