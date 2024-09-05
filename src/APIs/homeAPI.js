import axios from 'axios';

const ACCESS_TOKEN = () => localStorage.getItem('Token');

const fetchUserInfo = async () => {
  try {
    const response = await axios.get('https://pcl.seung.site/api/user/get-user-info', {
      headers: {
        Authorization: ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch user info:', error);
    throw error;
  }
};

export default fetchUserInfo;
