import { useEffect, useRef, useState } from "react"
import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import MenuIcon from '@mui/icons-material/Menu';
import { buttonStyle } from "../themes/componentStyling";

const Header = () => {
    return (
        <div>
            <MenuIcon sx={buttonStyle}/>
        </div>
    )
}

export default Header