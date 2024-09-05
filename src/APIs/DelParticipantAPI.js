function DelParticipantAPI(groupId, email) {
  let ACCESS_TOKEN = localStorage.getItem('Token');
  const payload = {
    groupId: groupId,
    email: email,
  };
  console.log('payload: ' + payload.groupId + ',' + payload.email);

  return fetch('https://pcl.seung.site/api/group/delete-member', {
    method: 'DELETE',
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
        throw new Error(errorData.message || 'delete participant failed');
      });
    }
  });
}

export default DelParticipantAPI;
