import axios from 'axios';

const API_KEY = "AIzaSyBtStBew1p5CJVaUQ6aHNajkM9L5Wgti1M"; 

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 40,
    key: API_KEY
  },
});