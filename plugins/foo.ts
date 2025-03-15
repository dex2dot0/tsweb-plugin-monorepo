import { toCurrency } from '@utils/strings';
import { getAccessToken } from '@core/ssf';

export namespace foo {
  if (elli && elli.script) {
    // Initialize event handlers
    elli.script.subscribe('loan', 'open', loanOpened);
    const currencyExample = toCurrency(123456.78);
    console.log('Currency example', currencyExample); // output: $123,456.78
    setup();
  }

  // Simple example to demonstrate sharing code between plugins
  async function setup() {
    try {
      const accessToken = await getAccessToken();
      console.log('Access token', accessToken);
    } catch (error) {
      console.error('Error initializing Encompass client', error);
    }
  }

  async function loanOpened() {
    // Retrieve the app object and bind loan object
    const loan = await elli.script.getObject('loan');
    const app = await loan.all();
    console.log('loan object from foo', app);
  }
}
