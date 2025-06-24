// talk to our backend using axios
import axios from 'axios';

// get users from json file
export async function getAllUsers() {
  try {
    // send get request to our fake backend
    const response = await axios.get('http://10.0.0.151:3001/users'
);

    // return the list of users
    return response.data;
  } catch (error) {
    // if something goes wrong show in console
    console.log('error fetching users:', error);
    return [];
  }
}
