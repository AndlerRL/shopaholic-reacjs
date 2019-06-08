import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://backendapi.turing.com/'
});

export default instance;