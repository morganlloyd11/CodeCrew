// call github api to check if username exists
import axios from 'axios';

// function to get user user info
export async function getUserInfo(username: string) {
  try {
    // send request to github api
    const response = await axios.get(`https://api.github.com/users/${username}`);

    // return data needed
    return {
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
    };
  } catch (error) {
    // if user not found show message
    console.log('error finding github user:', error);
    return null;
  }
}
