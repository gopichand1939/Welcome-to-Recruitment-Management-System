import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/users/';

const getProfile = async () => {
  const response = await axios.get(API_URL + 'profile');
  return response.data;
};

const userService = {
  getProfile,
};

export default userService;
