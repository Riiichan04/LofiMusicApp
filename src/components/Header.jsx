import { useEffect, useRef, useState } from "react"
import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <div>
            <MenuIcon sx={{ "color": "var(--text-color)", "fontSize": "var(--h2)" }}/>
        </div>
    )
}

export default Header