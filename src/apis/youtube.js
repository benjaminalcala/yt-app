import axios from 'axios';


const KEY = 'AIzaSyCcO0B-a32rTzgALJGva1r96q9tjg6Bm7Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})