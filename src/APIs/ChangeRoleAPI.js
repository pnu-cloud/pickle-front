function ChangeRoleAPI(groupId, username, role) {
  let ACCESS_TOKEN = localStorage.getItem('Token');
  const payload = {
    groupId: groupId,
    username: username,
    role: role,
  };
  console.log('payload: ' + payload.groupId + ',' + payload.username + ',' + payload.role);

  return fetch('https://pcl.seung.site/api/group/change-member-role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ACCESS_TOKEN,
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (response.ok) {
      return response;
    } else {
      return response.json().then((errorData) => {
        throw new Error(errorData.message || 'change participant role failed');
      });
    }
  });
}

export default ChangeRoleAPI;
