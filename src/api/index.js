import { get } from "../utils/request"
const api = {
    /**
     * Play music
     */
    getPlayer(params){
        return get("/api/song/url",params)
    }
}

export default api