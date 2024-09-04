function LoginAPI(email, password) {
  const payload = {
    email: email,
    password: password,
  };
  console.log('payload: ' + payload.email + ',' + payload.password);

  return fetch('https://pcl.seung.site/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), // 하드코딩된 데이터 대신 payload 사용
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorData) => {
        throw new Error(errorData.message || 'Sign-in failed');
      });
    }
  });
}

export default LoginAPI;
