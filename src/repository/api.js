import axios from 'axios';

const fetchChatacters = async (page) => {
  const URL = 'https://swapi.co/api';

  try {
    const { data } = await axios.get(`${URL}/people`, {
      params: {
        page,
        format: 'json',
      },
    });

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchInfo = async (url) => {
  try {
    const { data } = await axios.get(url, {
    });

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};


export { fetchChatacters, fetchInfo };
