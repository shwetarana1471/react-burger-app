import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-b5931-default-rtdb.firebaseio.com/'
});

export default instance;