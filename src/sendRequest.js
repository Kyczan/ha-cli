import axios from 'axios';

const getUrl = value =>
  `https://maker.ifttt.com/trigger/${value}/with/key/${process.env.API_KEY}`;

const sendRequest = async toggle => {
  if (!Array.isArray(toggle)) {
    toggle = [{ value: toggle }];
  }

  const promises = [];
  for (let item of toggle) {
    promises.push(axios.get(getUrl(item.value)));
  }

  try {
    await Promise.all(promises);
    return { status: 'ok', payload: 'Congratulations!' };
  } catch (error) {
    return { status: 'error', payload: error.message };
  }
};

export default sendRequest;
