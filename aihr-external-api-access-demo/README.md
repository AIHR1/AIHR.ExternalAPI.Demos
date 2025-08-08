# 🔐 AIHR External API Auth0 Login Demo — Documentation

## 📋 Overview

This is a Single Page Application (SPA) built with HTML and JavaScript using Auth0 for authentication. It implements:

- Auth0 login
- Silent token retrieval for API calls
- Two protected backend API calls:
- Example of calling Get Learning Catalog API
- Example of calling Get Learning Progress API

## How it works

In this demo we are using the Auth0 SDK to manage login in the application. The key behavior is:

1. User clicks the login button

- The button triggers a redirect login using the Auth0 SDK:

```
await auth0.loginWithRedirect();
```

2. Redirects to the Auth0 Universal Login page

- This is a central login page hosted by Auth0.
- Multiple login options (Database, Google, SAML, etc.) should be used based on input.

3. User enters credentials (email & password) or continues with social login

- Auth0 exchanges this for a JWT (access token, ID token) and redirects the user back to your app.

4. Your app uses the token

- The Auth0 SDK picks up the tokens and stores them (e.g., in localStorage).
- You can now call protected APIs with the access token.

## ⚙️ Technologies Used

- HTML & Vanilla JavaScript
- Auth0 SPA JS SDK (v2)
- ES modules
- Fetch API for calling protected endpoints

## 🧩 Project Structure

📁 project-root <br/>
├── index.html ← Main HTML page <br/>
├── auth.js ← Auth0 client configuration module <br/>
├── style.css ← UI styling

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
