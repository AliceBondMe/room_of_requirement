import axios from 'axios';

export async function searchAllCharacters() {
  const BASE_URL = 'https://hp-api.onrender.com/api/';
  const endpoint = 'characters';

  const response = await axios.get(`${BASE_URL}${endpoint}`);
  return response.data;
}
