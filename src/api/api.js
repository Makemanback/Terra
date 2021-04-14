import axios from "axios";

const BACKEND_URL = `https://376e73c485c0.ngrok.io/user/register`;


export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  return api;
};
