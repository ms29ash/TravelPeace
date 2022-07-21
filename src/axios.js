import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://peace-travel.herokuapp.com',

});

export default instance;
