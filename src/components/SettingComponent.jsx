import CommingSoon from '../components/ComingSoon.jsx'

const SettingComponent = ({ displayState, setDisplayState }) => {
    return (
        <>
            {displayState ? (
                <div id="task-board-form">
                    <div id="task-board-form--body">
                        <CommingSoon onBackToPrevious={setDisplayState} />
                    </div>
                </div>
            ) : <></>}
        </>
    )
}

export default SettingComponent