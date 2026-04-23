import axios from 'axios';

export default axios.create({
    baseURL:'http://a6e4ace98eb594442aab78a7ebbb4a89-527943090.us-east-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
