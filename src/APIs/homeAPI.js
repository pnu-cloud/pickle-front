import axios from 'axios';

const fetchUserInfo = async () => {
  try {
    const response = await api.get('https://pcl.seung.site/api/user-info');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user info:', error);
    throw error;
  }
};
