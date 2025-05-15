import { useState } from "react"
import '../styles/task-table-component.css'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import { smallButtonStyle } from "../themes/componentStyling";

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
                        <h4 style={{margin: 'auto 0', fontWeight: '500'}}>Add a new task</h4>
                        <CloseRoundedIcon sx={smallButtonStyle} onClick={() => closePopup(false)}/>
                    </div>
                    <div>
                        <div>
                            <DriveFileRenameOutlineRoundedIcon sx={{color: 'var(--text-color)'}}/>
                            <span>Name</span>
                        </div>
                        <input type="text" name="" id="" />

                        <div>
                            <SubjectRoundedIcon sx={{color: 'var(--text-color)'}}/>
                            <span>Description</span>
                        </div>
                        <textarea name="" id="" style={{ resize: 'none' }} rows={10}></textarea>

                        <div>
                            <EventRoundedIcon sx={{color: 'var(--text-color)'}}/>
                            <span>Deadline</span>
                        </div>
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