// auth.js
import { Auth0Client } from "https://cdn.jsdelivr.net/npm/@auth0/auth0-spa-js@2.0.4/+esm";

export const auth0 = new Auth0Client({
  domain: "<YOUR_AUTH0_DOMAIN>", // idp domain
  clientId: "<YOUR_AUTH0_CLIENT_ID>", // idp client id
  cacheLocation: "localstorage", // save the session to localstorage to persist authentication
  authorizationParams: {
    redirect_uri: window.location.origin,
    scope: "openId profile email offline_access update:current_user_identities",
    audience: "<YOUR_API_AUDIENCE>", // requested audience
  },
});

window.auth0 = auth0;
export default auth0;
