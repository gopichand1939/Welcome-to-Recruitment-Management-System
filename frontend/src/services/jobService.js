import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/jobs/';

const createJob = async (jobData) => {
  const response = await axios.post(API_URL, jobData);
  return response.data;
};

const getJobs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const jobService = {
  createJob,
  getJobs,
};

export default jobService;
