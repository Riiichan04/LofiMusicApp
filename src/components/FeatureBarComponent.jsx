import '../styles/feature-bar.css'
import TableViewRoundedIcon from '@mui/icons-material/TableViewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { buttonStyleWithoutHover } from '../themes/componentStyling';

const FeatureBarComponent = ({ displayTaskBoard, displaySetting }) => {
    // 5.1.1.1. Click vào nút bảng công việc
    const setTaskTableDisplayState = () => {
        displayTaskBoard(state => !state)
    }

    const setSettingDisplayState = () => {
        displaySetting(state => !state)
    }

    return (
        <div style={{ display: 'flex' }}>
            <div className="feature-detail--element" onClick={setTaskTableDisplayState}>
                <TableViewRoundedIcon sx={buttonStyleWithoutHover} />
                <p>Task Board</p>
            </div>
            <div className="feature-detail--element" onClick={setSettingDisplayState}>
                <SettingsRoundedIcon sx={buttonStyleWithoutHover} />
                <p>Setting</p>
            </div>
        </div>
    )

}


export default FeatureBarComponent