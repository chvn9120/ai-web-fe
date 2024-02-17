import axios from 'axios';

// Replace your server url here
export default axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 5_000,
})



