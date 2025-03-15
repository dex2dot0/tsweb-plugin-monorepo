export const getLoan = async (url: string, apiToken: string): Promise<any> => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer ' + apiToken);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

  return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error(error));
};
