function DelParticipantAPI(groupId, email) {
  let ACCESS_TOKEN = localStorage.getItem('Token');
  const payload = {
    groupId: groupId,
    email: email,
  };
  console.log('payload: ' + payload.groupId + ',' + payload.email);

  return fetch('https://pcl.seung.site/api/group/invite-member', {
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
        throw new Error(errorData.message || 'create group failed');
      });
    }
  });
}

export default DelParticipantAPI;
