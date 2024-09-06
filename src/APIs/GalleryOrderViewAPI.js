function GalleryOrderViewAPI() {
  let ACCESS_TOKEN = localStorage.getItem('Token');

  return fetch('https://pcl.seung.site/api/gallery?order=view', {
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
        throw new Error(errorData.message || 'view order failed');
      });
    }
  });
}

export default GalleryOrderViewAPI;
