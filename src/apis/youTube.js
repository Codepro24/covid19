import axios from "axios";

const KEY = "AIzaSyDNAIJVs6TNnBtAu9IWNLk8d2dsIvyemZI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 5,
    key: KEY,
  },
});



