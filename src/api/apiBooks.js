const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import axios from "axios";

export const apiBooks = async (search)=>{
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: search,
                key: API_KEY,
                maxResults: '40'
            }
        })
        return response.data.items;
    } catch (error) {
        console.log(error)
    }
}