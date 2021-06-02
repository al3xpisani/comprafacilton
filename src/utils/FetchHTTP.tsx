const FetchHTTP = async (url = '', data = '') => {
  // console.log('data',url.concat(data))
  const response = await fetch(data ? url.concat(data) : url, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json().catch(error => console.log('fetch error', error));
};

export default FetchHTTP;
