import { Auth0Client } from "https://cdn.jsdelivr.net/npm/@auth0/auth0-spa-js@2.0.4/+esm";

export const auth0 = new Auth0Client({
  domain: "<YOUR_AUTH0_DOMAIN>", // service provider's domain
  clientId: "<YOUR_AUTH0_CLIENT_ID>", // service provider's client id
  cacheLocation: "localstorage", // save the session to localstorage to persist authentication
  authorizationParams: {
    redirect_uri: window.location.origin + "/",
    scope: "openid profile email",
    audience: "<YOUR_API_AUDIENCE>", // The unique identifier for your API in Auth0
  },
});

window.auth0 = auth0;
export default auth0;
