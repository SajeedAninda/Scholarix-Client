import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://scholarix-server.vercel.app',
    // withCredentials: true
});

const useAxiosInstance = () => {
    return instance;
};

export default useAxiosInstance;