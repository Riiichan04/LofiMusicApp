import { smallButtonStyle } from "../themes/componentStyling"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../styles/task-board-component.css'

const TaskBoardComponent = ({ tableDisplayState, setTableDisplay }) => {
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
                        <TaskContainer />
                        <TaskContainer />
                        <TaskContainer />
                        <AddNewCardContainer />
                    </div>
                </div>
            ) : <></>}
        </>
    )
}

const TaskContainer = () => {
    return (
        <div className="task-container">
            <div className="task-container--header">
                <h6 style={{ margin: 'auto 0', fontWeight: '500' }}>On going (3)</h6>
            </div>
            <div className="task-container--body">
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    )
}

const AddNewCardContainer = () => {
    return (
        <div className="task-container add-new-container" style={{margin: '0 1rem auto 1rem', cursor: 'pointer'}}>
            <div className="task-container--header">
                <h6 style={{ margin: 'auto 0', fontWeight: '500', width: '15rem'}}> + Add new card</h6>
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

export default TaskBoardComponent