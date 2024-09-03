const LoginAPI = (email, password) => {
  const payload = {
    email: email,
    password: password,
  };
  console.log('payload: ' + payload.email + ',' + payload.password);

  fetch('https://pcl.seung.site/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), // 하드코딩된 데이터 대신 payload 사용
  })
    .then((response) => {
      if (response.ok) {
        // console.log('jwt' + response.data.jwt);
        return response.json();
      } else {
        throw new Error('Login failed: ' + response.statusText);
      }
    })
    .then((data) => {
      console.log('Login successful:', data);
      localStorage.clear();
      localStorage.setItem('Token', data.data.jwt);
      // let ACCESS_TOKEN = localStorage.getItem("accessToken");
      window.location.href = `/`;
    })
    .catch((error) => {
      console.error('Error during Login:', error);
    });
};

export default LoginAPI;
