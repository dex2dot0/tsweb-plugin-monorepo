import { EncompassAPI } from '@core/encompass-api';
import { getAccessToken } from '@core/ssf';

let encompassApiClient: EncompassAPI;

export namespace bar {
  if (elli && elli.script) {
    // Initialize event handlers
    elli.script.subscribe('loan', 'open', loanOpened);
    setup();
  }

  async function setup() {
    try {
      const accessToken = await getAccessToken();
      encompassApiClient = new EncompassAPI('https://api.elliemae.com/encompass', accessToken);
    } catch (error) {
      console.error('Error initializing Encompass client', error);
    } finally {
      getUserFromApi();
    }
  }

  async function getUserFromApi() {
    try {
      const user = await encompassApiClient.v1GetUser();
      // User is now typed thanks to types defined in the types/encompass-api.d.ts file
      const userName = user?.fullName;
      console.log(`User object from API. Hello ${userName}!`);
    } catch (error) {
      console.error('Error getting user', error);
    }
  }

  async function loanOpened() {
    // Retrieve the app object and bind loan object
    const loan = await elli.script.getObject('loan');
    const app = await loan.all();

    console.log('loan object from SSF', app?.loan);

    // compare to the loan object from the API
    const loanApi = await encompassApiClient.v3GetLoan(app?.loan?.id);
    console.log('loan object from API', loanApi);
  }
}
