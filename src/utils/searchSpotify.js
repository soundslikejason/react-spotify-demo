import axios from 'axios';
const searchSpotify = (searchItem) => new Promise((resolve, reject) => {
  const result = axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`);
  result
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
});

export default searchSpotify;
