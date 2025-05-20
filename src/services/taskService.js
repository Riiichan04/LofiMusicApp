//4.1.6. Kiểm tra lại thông tin đã nhập
function validateNewTaskData(taskData) {
    return Date.now() - taskData.deadline < 5*60*1000 ||
        taskData.name === ""|| isTaskExist(taskData.name)
}

function isTaskExist(name) {
    return false
}

export { validateNewTaskData }