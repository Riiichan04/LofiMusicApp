import { smallButtonStyle } from "../themes/componentStyling"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../styles/task-board-component.css'
import { useState } from "react";
import { getTaskData } from "../api/taskApi";

const TaskBoardComponent = ({ tableDisplayState, setTableDisplay, setNewTaskDisplay, setNewListDisplay }) => {
    return (
        <>
            {tableDisplayState ? (
                <div id="task-board-form">
                    <div id="task-board-form--header">
                        <div>
                            <h4 style={{ margin: 'auto 0', fontWeight: '500' }}>Task Board</h4>
                            <p>View and manage your task board.</p>
                        </div>
                        <CloseRoundedIcon sx={smallButtonStyle} onClick={() => setTableDisplay(false)} />
                    </div>
                    <div id="task-board-form--body">
                        <TaskContainer setNewTaskDisplay={setNewTaskDisplay} />
                        <TaskContainer setNewTaskDisplay={setNewTaskDisplay} />
                        <TaskContainer setNewTaskDisplay={setNewTaskDisplay} />
                        <AddNewTaskList onClick={setNewListDisplay} />
                    </div>
                    <div id="task-board-form--footer">

                    </div>
                </div>
            ) : <></>}
        </>
    )
}

const TaskContainer = ({ setNewTaskDisplay }) => {
    const [taskCard, setTaskCard] = useState([])

    const fetchTaskData = async (userId) => {
        const data = await getTaskData(userId)
        data.map(card => <TaskCard cardDetail={card} />)
        setTaskCard(data)
    }
    
    // 4.1.4. Hiển thị form nhập task mới
    const displayNewTask = () => {
        setNewTaskDisplay(state => !state)
    }

    return (
        <>
            <div className="task-container">
                <div className="task-container--header">
                    <h6 className="task-container__title" style={{ margin: 'auto 0', fontWeight: '500' }}>On going (3)</h6>
                    <p className="task-container__description">My on going task</p>
                </div>
                <div className="task-container--body">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
                <div className="task-container--footer">
                    <AddNewTaskCard onClick={displayNewTask} />
                </div>
            </div>
        </>
    )
}

const AddNewTaskList = ({ onClick }) => {
    return (
        <div className="task-container add-new-container"
            style={{ margin: '0 1rem auto 1rem', cursor: 'pointer' }}
            onClick={onClick}
        >
            <div className="task-container--header">
                <h6 style={{ margin: 'auto 0', fontWeight: '500', width: '15rem' }}> + Add new list</h6>
            </div>
        </div>
    )
}


const TaskCard = ({ cardDetail }) => {
    return (
        <div className="task-card">
            <div className="task-card--tag-color" style={{ backgroundColor: "#a5bb61" }}>
            </div>
            <div className="task-card--detail">
                <h5 className="task-card--detail__title">Some name</h5>
                <p className="task-card--detail__description">Some description</p>
            </div>
        </div>
    )
}

const AddNewTaskCard = ({ onClick }) => {
    return (
        <div
            className="task-card--detail"
            style={{ paddingTop: '0', paddingLeft: '0' }}
            // 4.1.3. Click vào nút thêm task mới
            onClick={onClick}>
            <h6 className="task-card--detail__title" style={{ cursor: 'pointer' }}>+ Add new task</h6>
        </div>
    )
}

export default TaskBoardComponent