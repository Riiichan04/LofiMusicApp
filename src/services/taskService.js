import { sendNewTaskData } from "../api/taskApi"

//5.1.1.4. Kiểm tra lại thông tin đã nhập
function validateNewTaskData(taskData) {
    if (Date.now() - taskData.deadline < 5*60*1000 ||
        taskData.name === ""|| isTaskExist(taskData.name))
        //Temp code
        sendNewTaskData(taskData)
    else return null
}

function isTaskExist(name) {
    return false
}

export { validateNewTaskData }