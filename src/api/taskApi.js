import axios from "axios";
import { validateNewTaskData } from "../services/taskService";

//4.1.7. Gửi thông tin về task xuống server
async function sendNewTaskData(taskData) {
    if (!validateNewTaskData(taskData)) return false
    const response = await axios.post(import.meta.env.VITE_SERVER_HOST + "/upload/task", taskData)
    return response.data.result
}

//In progress
async function getTaskData(userId) {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_HOST}/get-task-detail?id=${userId}`)
    return response.data
}

export { sendNewTaskData, getTaskData }