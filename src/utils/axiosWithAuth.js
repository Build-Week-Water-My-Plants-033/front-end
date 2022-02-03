import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'https://watermyplants1234.herokuapp.com/api'
  });
}

export default axiosWithAuth;