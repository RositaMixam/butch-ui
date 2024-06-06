import axios from 'axios';


export const getAllConfigs = async () => {
  try {
    const res = await axios.get('/sampleJson.json');
    return res.data;
  } catch (e) {
    console.error('error');
    throw e;
  }
};

export const getAwesomeQueryBuilder = async () => {
  try {
    const res = await axios.get('/sampleApi.json');
    return res.data;
  } catch (e) {
    console.error('error');
    throw e;
  }
};
