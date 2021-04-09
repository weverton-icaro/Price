import axios from 'axios';

const instance = axios.create({
  baseURL: "https://fipeapi.appspot.com/api/1/",
});

export default instance;