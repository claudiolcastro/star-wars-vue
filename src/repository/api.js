import axios from 'axios';

const fetchChatacters = async (page) => {
  const URL = 'https://swapi.co/api/';

  await axios.get(`${URL}/people`, {
    params: {
      page,
    },
  })
    .then(response => response)
    .catch(error => console.error(error));
};

const fetchStarships = async (id) => {
  const URL = 'https://swapi.co/api/';

  await axios.get(`${URL}/${id}`)
    .then(response => response)
    .catch(error => console.error(error));
};


export { fetchChatacters, fetchStarships };
