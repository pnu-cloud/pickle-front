function UserAPI(email) {
  let ACCESS_TOKEN = localStorage.getItem('Token');
  console.log('payload: ' + email);

  return fetch(`https://pcl.seung.site/api/user?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ACCESS_TOKEN,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorData) => {
        throw new Error(errorData.message || 'UserData failed');
      });
    }
  });
}

export default UserAPI;
