import { useEffect, useRef, useState } from "react"
import { getMusicInfo } from "../api/musicApi"
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

    // State quản lý âm lượng, mặc định là 0.5 (50%)
    const [volume, setVolume] = useState(0.5)
    // Tổng số bài nhạc lấy từ API
    const [totalMusic, setTotalMusic] = useState(0)
    // Biến trạng thái đang phát hay tạm dừng (true = đang phát)
    const [isStart, setIsStart] = useState(false)
    // Thông tin bài nhạc hiện tại (object chứa chi tiết)
    const [currentMusic, setCurrentMusic] = useState(null)//Contain current music detail
    // Chỉ số bài nhạc đang phát, khởi tạo bằng prop index hoặc 0
    const [musicIndex, setMusicIndex] = useState(index || 0)
    // Ref tới thẻ <audio> để điều khiển phát nhạc
    const audioRef = useRef(null)

    //Asynchronous template for fetching API in React
    // useEffect chạy khi component mount hoặc khi musicIndex thay đổi
    useEffect(() => {
        //Set an async function inside useEffect
        // Hàm async để gọi API lấy dữ liệu nhạc
        const fetchMusicData = async () => {
            const musicData = await getMusicInfo() // gọi API lấy mảng nhạc
            setTotalMusic(musicData.length)  // lưu tổng số bài nhạc
            setCurrentMusic(musicData[musicIndex]);// set bài nhạc hiện tại theo index
        }
        console.log(musicIndex)// log để debug chỉ số bài nhạc hiện tại
        //Call it inside useEffect
        fetchMusicData()  // gọi hàm lấy nhạc
    }, [musicIndex])//useEffect only rerun when musicIndex change

    // Hàm bật/tắt nhạc khi nhấn nút Play/Pause
    const toggleButton = () => {
        const audio = audioRef.current
        if (!audio) return
        isStart ? audio.pause() : audio.play()
        setIsStart(!isStart) // đổi trạng thái phát/dừng
    }
    // Hàm chuyển bài kế tiếp (nếu chưa phải bài cuối cùng)
    const nextMusic = () => {
        //Temp code
        if (musicIndex < totalMusic - 1) setMusicIndex(musicIndex + 1)
    }
    // Hàm chuyển bài trước (nếu chưa phải bài đầu tiên)
    const prevMusic = () => {
        //Temp code
        if (musicIndex > 0) setMusicIndex(musicIndex - 1)
    }
    // Hàm thay đổi âm lượng khi kéo thanh trượt volume
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
                //Will be applied loading to the music detail, not the whole component
            ) : <CircularProgress />}
        </div>
    )
}

export default MusicComponent