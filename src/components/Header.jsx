// import { useEffect, useRef, useState } from "react"
// import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { buttonStyle } from "../themes/componentStyling";
const Header = ({ theme, setTheme }) => {

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <div>
            {theme === 'light-theme' ?
                <LightModeRoundedIcon onClick={() => changeTheme('dark-theme')} sx={buttonStyle} /> :
                <DarkModeRoundedIcon onClick={() => changeTheme('light-theme')} sx={buttonStyle} />
            }
        </div>
    )
}

export default Header