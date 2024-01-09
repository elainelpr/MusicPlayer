import { get } from "../utils/request"
const api = {
    /**
     * 播放
     */
    getPlayer(params){
        return get("/api/song/url",params)
    }
}

export default api