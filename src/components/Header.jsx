// import { useEffect, useRef, useState } from "react"
// import { getMusicInfo } from "../api/musicGetter"
import '../styles/music-component.css'
import MenuIcon from '@mui/icons-material/Menu';
import { buttonStyle } from "../themes/componentStyling";
import { useState } from 'react';

const Header = () => {
    const [loginState, setLoginState] = useState(false)

    const openLoginPopup = (newState) => {
        setLoginState(newState)
    }

    return (
        <header style={{margin: '1rem'}}>
            <MenuIcon sx={buttonStyle} />
            <div>
                {loginState ?
                    (<></>) :
                    <p id="login-button" onClick={openLoginPopup}>Login</p>
                }
            </div>
        </header>
    )
}

export default Header