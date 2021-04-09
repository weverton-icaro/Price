import axios from 'axios';

export const api = axios.create({
  baseURL: "https://fipeapi.appspot.com/api/1/",
});
