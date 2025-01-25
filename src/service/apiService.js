import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000/",
    headers: {
        "Content-Type" : "application/json"
    }
})

export const getPet = () => api.get('/pet',{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
export const registerPet = (data) => api.post('/pet',data,{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
export const login = (data) => api.post('/login',data);