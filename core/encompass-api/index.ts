import { getLoan } from './loanManagement/v3';

// This is a poor example of how to implement some shared logic across plugins.
// This is not necessarily a good pattern to follow and is only used for demonstration purposes.
export class EncompassAPI {
  constructor(
    private url = 'https://api.elliemae.com/encompass',
    private apiToken?: string | undefined,
  ) {
    this.url = url;
    this.apiToken = apiToken;
  }

  async getAccessTokenResourceOwner(
    username: string,
    instance: string,
    password: string,
    clientId: string,
    clientSecret: string,
  ): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'password');
    urlencoded.append('username', `${username}@encompass:${instance}`);
    urlencoded.append('password', password);
    urlencoded.append('client_id', clientId);
    urlencoded.append('client_secret', clientSecret);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow' as RequestRedirect,
    };

    fetch('https://api.elliemae.com/oauth2/v1/token', requestOptions)
      .then(response => response.json())
      .then(result =>
        result?.access_token ? (this.apiToken = result.access_token) : console.error(result),
      )
      .catch(error => console.error(error));
  }

  async v3GetLoan(loanGuid: string): Promise<any> {
    if (!this.apiToken) {
      console.error('API Token is required');
      return;
    }

    return await getLoan(`${this.url}/v3/loans/${loanGuid}`, this.apiToken);
  }
}
