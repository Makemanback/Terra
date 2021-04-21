import axios from "axios";
import {BASE_URL} from '../const';

// const BACKEND_URL = `https://376e73c485c0.ngrok.io/user/register`;
// const BACKEND_URL = `https://376e73c485c0.ngrok.io/user/register`;


export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
  });

  return api;
};
