import axios from 'axios';

const getUrl = (value: string) => `https://maker.ifttt.com/trigger/${value}/with/key/${process.env.API_KEY}`;

const sendRequest = async (toggle: Array<{ value: string }>) => {
  if (!Array.isArray(toggle)) {
    toggle = [{ value: toggle }];
  }

  const promises = [];
  for (const item of toggle) {
    promises.push(axios.get(getUrl(item.value)));
  }

  try {
    await Promise.all(promises);
    return {
      payload: 'Congratulations! Request has been successfully sent.',
      status: 'ok',
    };
  } catch (error) {
    return { status: 'error', payload: error.message };
  }
};

export default sendRequest;
