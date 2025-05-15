// import { useEffect, useRef, useState } from "react"
// import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import MenuIcon from '@mui/icons-material/Menu';
import { buttonStyle } from "../themes/componentStyling";

const Header = () => {
    return (
        <header>
            <MenuIcon sx={buttonStyle}/>
        </header>
    )
}

export default Header