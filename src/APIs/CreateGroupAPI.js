function CreateGroupAPI(groupName, groupDescription) {
  let ACCESS_TOKEN = localStorage.getItem('Token');
  const payload = {
    groupName: groupName,
    groupDescription: groupDescription,
  };
  console.log('payload: ' + payload.groupName + ',' + payload.groupDescription);

  return fetch('https://pcl.seung.site/api/group', {
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

export default CreateGroupAPI;
