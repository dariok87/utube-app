import axios from 'axios';

const KEY = 'AIzaSyCjeYQIPl3JmBUFJGSCUw5F6OPVZDvW4xc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
