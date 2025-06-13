// call GitHub API to check if a username exists
import axios from 'axios';

export async function getUserInfo(username: string) {
  const response = await axios.get(`https://api.github.com/users/${username}`);

  return response.data};
