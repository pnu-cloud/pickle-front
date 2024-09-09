import axios from 'axios';

const fetchUserInfo = async () => {
  const ACCESS_TOKEN = localStorage.getItem('Token');

  try {
    const response = await axios.get('https://pcl.seung.site/api/user/get-user-info', {
      headers: {
        Authorization: ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    const { username, userImage } = response.data.data;
    return { username, userImage };
  } catch (error) {
    console.error('Failed to fetch user info:', error);
    throw error;
  }
};

export default fetchUserInfo;
