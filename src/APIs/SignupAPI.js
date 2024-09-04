function SignupAPI(email, username, password) {
  const payload = {
    email: email,
    username: username,
    password: password,
  };
  console.log('payload: ' + payload.email + ', ' + payload.username + ', ' + payload.password);

  return fetch('https://pcl.seung.site/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorData) => {
        throw new Error(errorData.message || 'Sign-up failed');
      });
    }
  });
}

export default SignupAPI;
