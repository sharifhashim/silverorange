import axios from 'axios';

const url = 'http://localhost:4000';

export default axios.create({
  baseURL: url,
});
