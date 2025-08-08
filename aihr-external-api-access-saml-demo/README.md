# 🔐 AIHR External API SSO Login Demo — Documentation

## 📋 Overview

This is a Single Page Application (SPA) built with HTML and JavaScript using Auth0 for authentication. It implements:

- SSO (Single Sign-On) login using Auth0
- Silent token retrieval for API calls
- Two protected backend API calls:
- Example of calling Get Learning Catalog API
- Example of calling Get Learning Progress API

## How it works

In this demo we are using the Auth0 SDK to manage login in the application. The key behavior is:
If the user’s email domain (e.g., @mycompany.com) matches a configured SSO (SAML) connection in Auth0, they will be automatically redirected to their company’s Identity Provider (IdP).

1. User clicks the login button

- The button triggers a redirect login using the Auth0 SDK:

```
await auth0.loginWithRedirect();
```

2. Redirects to the Auth0 Universal Login page

- This is a central login page hosted by Auth0.
- Auth0 detects what type of connection (Database, Google, SAML, etc.) should be used based on input.

3. User types in their email: john.doe@mycompany.com

- Auth0 looks at the domain of the email: mycompany.com
- You’ve set up a SAML SSO connection in Auth0 and associated it with the domain mycompany.com.

4. Auth0 redirects the user to their company’s IdP

- Auth0 knows that mycompany.com should be authenticated via SAML.
- It redirects to the Identity Provider’s login page (e.g., Azure AD, Okta, ADFS).

5. User logs in via the IdP

- If login is successful, the IdP sends a SAML Response back to Auth0.
- Auth0 exchanges this for a JWT (access token, ID token) and redirects the user back to your app.

6. Your app uses the token

- The Auth0 SDK picks up the tokens and stores them (e.g., in localStorage).
- You can now call protected APIs with the access token.

## ⚙️ Technologies Used

- HTML & Vanilla JavaScript
- Auth0 SPA JS SDK (v2)
- ES modules
- Fetch API for calling protected endpoints
- Auth0 SSO with external IdP support (e.g., Google SAML)

## 🧩 Project Structure

📁 project-root <br/>
├── index.html ← Main HTML page <br/>
├── auth.js ← Auth0 client configuration module <br/>
├── style.css ← UI styling <br/>

## ✅ API Buttons:

- login/logout: Handles both login and logout actions.
- getLearningCatalogBtn: Calls GET /learningcatalog/search with bearer token.
- getLearningProgressBtn: Calls POST /Adoption/10/1 with user ID and bearer token.

## ✅ Configuration:

```
export const auth0 = new Auth0Client({
  domain: "xxxx",                         // SSO service provider domain
  clientId: "zxxx",                       // SSO service provider client ID
  cacheLocation: "localstorage",          // Persist session. It is not required, other caching options can also be used
  authorizationParams: {
    redirect_uri: window.location.origin, // Redirect location after login
    scope: "openid profile email",        // Requested scopes
    audience: "yxxxx"                     // API audience for token
  },
});
```

## 💻 How to run the Demo

Running the demo is simple. In the demo's root directory, run:

```
npx serve
```
