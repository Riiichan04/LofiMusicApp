import axios from "axios";

/**
 * Get all music info from server
 * @param {number} [offset] - Starting index to get music data. Will be added in future.
 * @param {number} [amount] - Quantity of data to get. Will be added in future
 */
async function getMusicInfo() {
    // const response = await axios.get(import.meta.env.VITE_SERVER_HOST)
    const response = await axios.get("http://lofimusic.click/admin/music/all")
    return response.data
}

export { getMusicInfo }