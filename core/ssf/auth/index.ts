export const getAccessToken = async () => {
  if (elli && elli.script) {
    const auth = await elli.script.getObject('auth');
    const accessTokenRequest = await auth.getAccessToken();
    //@ts-ignore return type needs to be fixed in the @types/ package, should not be a string
    const accessToken = accessTokenRequest?.access_token;
    if (accessToken) {
      return accessToken;
    } else {
      console.error('Access token not found');
    }
  }
};
