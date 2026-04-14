import axios from 'axios';

export default axios.create({
    baseURL:'http://3.144.214.85:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
