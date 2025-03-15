import { type User } from 'encompass-api';

export const getUser = async (
  baseUrl: string,
  apiToken: string,
  userId?: string,
): Promise<User> => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${apiToken}`);

  const user = userId ? userId : 'me';

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

  return fetch(`${baseUrl}/v1/company/users/${user}`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error(error));
};
