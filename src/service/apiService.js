import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3001/",
    headers: {
        "Content-Type" : "application/json"
    }
})

export const getPet = () => api.get('/pet');
export const registerPet = (data) => api.post('/pet',data)