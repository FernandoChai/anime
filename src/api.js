import axios from "axios";

const baseUrl = process.env.REACT_APP_ANIME_DATA_BASE_URL;

export const getPopularAnimes = async () => {
    const popularAnimes = await axios.get(
        `${baseUrl}/popular`, {
        params: {
            page: 1
        }
    }
    )
    return popularAnimes
}