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
  }
};

const fetchStarships = async (id) => {
  const URL = 'https://swapi.co/api';

  try {
    const { data } = await axios.get(`${URL}/starchips/${id}`, {
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};


export { fetchChatacters, fetchStarships };
