import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-390c9.firebaseio.com/'
});

export default instance;