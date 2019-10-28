import axios from 'axios'
import { getToken } from "./auth";

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}
const api = axios.create({
    baseURL: 'https://4000-bedb2e14-0f1f-4107-8d76-58f0741e16b6.ws-us1.gitpod.io'
})

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
