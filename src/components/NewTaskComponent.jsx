import '../styles/new-task-component.css'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import { smallButtonStyle } from "../themes/componentStyling";
import { validateNewTaskData } from '../services/taskService';
import { useState } from 'react';

const TaskTableComponent = ({ displayState, setDisplayState }) => {
    const [taskName, updateTaskName] = useState("")
    const [taskDescription, updateTaskDescription] = useState("")
    const [endDate, updateEndDate] = useState(null)

    //5.1.1.3. Nhập thông tin và click vào nút xác nhận
    const submitNewTask = () => {
        const taskData = {
            title: taskName,
            description: taskDescription,
            endDate: endDate
        }

        validateNewTaskData(taskData)
    }

    return (
        <>
            {displayState ? (
                <div id="new-task-form-container">
                    <div id="new-task-form">
                        <div id="new-task-form--header">
                            <h4 style={{ margin: 'auto 0', fontWeight: '500' }}>Add a new task</h4>
                            <CloseRoundedIcon sx={smallButtonStyle} onClick={() => setDisplayState(false)} />
                        </div>
                        <form>
                            <div className="new-task-form--element">
                                <div>
                                    <DriveFileRenameOutlineRoundedIcon sx={{ color: 'var(--text-color)' }} />
                                    <span>Name</span>
                                </div>
                                <input type="text" name="" id="" onChange={(e) => updateTaskName(e.target.value)} />
                            </div>
                            <div className="new-task-form--element">
                                <div>
                                    <SubjectRoundedIcon sx={{ color: 'var(--text-color)' }} />
                                    <span>Description</span>
                                </div>
                                <textarea
                                    name="" id=""
                                    style={{ resize: 'none' }}
                                    rows={10}
                                    onChange={(e) => updateTaskDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <div className="new-task-form--element">
                                <div>
                                    <EventRoundedIcon sx={{ color: 'var(--text-color)' }} />
                                    <span>Deadline</span>
                                </div>
                                <input type="date" name="" id="" onChange={(e) => updateEndDate(e.target.value)} />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '2rem', width: '100%' }}>
                                <button id="add-new-task-button" onClick={submitNewTask}>
                                    {/* <AddRoundedIcon sx={textButtonStyle} /> */}
                                    <span style={{ color: '#fafafa' }}>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : <></>}
        </>
    )
}


const TaskListComponent = ({ displayState, setDisplayState }) => {
    return (
        <>
            {displayState ? (
                <div id="new-task-form-container">
                    <div id="new-task-form">
                        <div id="new-task-form--header">
                            <h4 style={{ margin: 'auto 0', fontWeight: '500' }}>Add a new list</h4>
                            <CloseRoundedIcon sx={smallButtonStyle} onClick={() => setDisplayState(false)} />
                        </div>
                        <form>
                            <div className="new-task-form--element">
                                <div>
                                    <DriveFileRenameOutlineRoundedIcon sx={{ color: 'var(--text-color)' }} />
                                    <span>Name</span>
                                </div>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="new-task-form--element">
                                <div>
                                    <SubjectRoundedIcon sx={{ color: 'var(--text-color)' }} />
                                    <span>Description</span>
                                </div>
                                <textarea name="" id="" style={{ resize: 'none' }} rows={10}></textarea>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '2rem', width: '100%' }}>
                                <button id="add-new-task-button">
                                    <span style={{ color: '#fafafa' }}>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : <></>}
        </>
    )
}

export { TaskTableComponent, TaskListComponent }