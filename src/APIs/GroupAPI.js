function GroupAPI(groupId) {
  let ACCESS_TOKEN = localStorage.getItem('Token');
  console.log('payload: ' + groupId);

  return fetch(`https://pcl.seung.site/api/group?groupId=${encodeURIComponent(groupId)}`, {
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
        throw new Error(errorData.message || 'Group failed');
      });
    }
  });
}

export default GroupAPI;
