import Axios from 'axios';

const token = localStorage.getItem('token');

const instance = Axios.create({
  baseURL: 'https://backendapi.turing.com/',
  headers: {
    "USER-KEY": token !== null ? token : null
  }
});

export default instance;