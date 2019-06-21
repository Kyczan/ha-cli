import axios from 'axios';

const sendRequest = async toggle => {
  const url = `https://maker.ifttt.com/trigger/${toggle}/with/key/${
    process.env.API_KEY
  }`;
  try {
    const response = await axios.get(url);
    return { status: 'ok', payload: response.data };
  } catch (error) {
    return { status: 'error', payload: error.message };
  }
};

export default sendRequest;
