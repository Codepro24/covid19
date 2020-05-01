import axios from 'axios';

export default axios.create({
    baseURL: "https://smalldataproject.com",
});

// export default axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3",
//     params: {
//       part: "snippet",
//       type: "videos",
//       maxResults: 5,
//       key: KEY,
//     },
//   });

//NSW Covid 
//curl --location --request GET 'https://smalldataproject.com/dataset/api/nsw-covid-19-cases.json'