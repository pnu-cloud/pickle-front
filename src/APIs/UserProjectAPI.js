function UserProjectAPI() {
  let ACCESS_TOKEN = localStorage.getItem('Token');

  return fetch('https://pcl.seung.site/api/user/project', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ACCESS_TOKEN,
    },
  }).then((response) => {
    console.log(response.status);
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorData) => {
        throw new Error(errorData.message || 'UserInfoAPI failed');
      });
    }
  });
}

export default UserProjectAPI;
