import axios from 'axios';

const fetchChatacters = async (page) => {
  const URL = 'https://swapi.co/api';

  try {
    const { data } = await axios.get(`${URL}/people`, {
      params: {
        page,
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

const fetchDuckDuckSearch = async (q) => {
  const URL = 'https://api.duckduckgo.com';

  try {
    const { data } = await axios.get(URL, {
      params: {
        q,
        format: 'json',
        pretty: 1,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};


export { fetchChatacters, fetchInfo, fetchDuckDuckSearch };
