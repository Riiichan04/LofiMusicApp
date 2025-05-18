import { smallButtonStyle } from "../themes/componentStyling"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../styles/task-board-component.css'
import TaskTableComponent from "./NewTaskComponent";

const TaskBoardComponent = ({ tableDisplayState, setTableDisplay, setNewTaskDisplay }) => {
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
                        <AddNewCardContainer />
                    </div>
                    <div id="task-board-form--footer">

                    </div>
                </div>
            ) : <></>}
        </>
    )
}

const TaskContainer = ({ setNewTaskDisplay }) => {
    // 4.1.4. Hiển thị form nhập task mới
    const displayNewTask = () => {
        setNewTaskDisplay(state => !state)
    }

    return (
        <>
            <div className="task-container">
                <div className="task-container--header">
                    <h6 style={{ margin: 'auto 0', fontWeight: '500' }}>On going (3)</h6>
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

const AddNewCardContainer = () => {
    return (
        <div className="task-container add-new-container" style={{ margin: '0 1rem auto 1rem', cursor: 'pointer' }}>
            <div className="task-container--header">
                <h6 style={{ margin: 'auto 0', fontWeight: '500', width: '15rem' }}> + Add new list</h6>
            </div>
        </div>
    )
}


const TaskCard = () => {
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