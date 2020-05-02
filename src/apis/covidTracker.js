import axios from 'axios';

export default axios.create({
    baseURL: "https://smalldataproject.com",
    params: {
        maxResults: 5,
 }
});

//NSW Covid 
//curl --location --request GET 'https://smalldataproject.com/dataset/api/nsw-covid-19-cases.json'