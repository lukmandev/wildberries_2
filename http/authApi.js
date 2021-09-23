import axios from 'axios';


const authApi = axios.create({
    baseURL: process.env.API_URL
});


export default authApi;