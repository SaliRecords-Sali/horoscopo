import axios from "axios";

const api = axios.create({
    baseURL: 'https://apiv2.resolvaclub.com/api/horoscope/test'
});
export { api }; 