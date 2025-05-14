import { useState } from "react"
import '../styles/task-table-component.css'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { smallButtonStyle, textButtonStyle } from "../themes/componentStyling";

const TaskTableComponent = ({ displayState }) => {
    const [display, setDisplay] = useState(displayState)

    const closePopup = (newState) => {
        setDisplay(newState)
        displayState = display
    }

    return (
        <>
            {display ? (
                <div id="task-table">
                    <div id="task-table--header">
                        <h4 style={{margin: 'auto 0'}}>Task Table</h4>
                        <CloseRoundedIcon sx={smallButtonStyle} onClick={() => closePopup(false)}/>
                    </div>
                    <div>
                        <p>Name</p>
                        <input type="text" name="" id="" />
                        <p>Description</p>
                        <textarea name="" id="" style={{ resize: 'none' }} rows={10}></textarea>
                        <p>Deadline</p>
                        <input type="date" name="" id="" />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'end', marginTop: '2rem', width: '100%'}}>
                        <button id="add-new-task-button">
                            {/* <AddRoundedIcon sx={textButtonStyle} /> */}
                            <span>Submit</span>
                        </button>
                    </div>
                </div>) : <></>}
        </>
    )
}


export default TaskTableComponent