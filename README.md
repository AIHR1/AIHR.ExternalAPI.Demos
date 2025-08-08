# 🔐 AIHR External API Auth0 Login Demos

This repository provides simple demonstration projects for integrating frontend applications with AIHR's external APIs using Auth0 for authentication.

These samples will help you understand how to:

- Implement different Auth0 login flows using the `auth0-spa-js` SDK.
- Securely call protected APIs using a bearer access token.
- Handle user sessions, login, and logout in a vanilla JavaScript application.

---

## 📁 The Demos

This repository contains two self-contained demonstrations:

- `aihr-external-api-access-demo`

  - **Use Case:** For connecting directly to an Auth0 tenant.
  - **Authentication Method:** Standard login with username/password or social providers configured in Auth0.

- `aihr-external-api-access-saml-demo`

  - **Use Case:** For connecting via a federated identity provider.
  - **Authentication Method:** Enterprise Single Sign-On (SSO) using a SAML connection.

---

## 🚀 Getting Started (Instructions for All Demos)

Follow these three steps to run any demo in this repository.

### Step 1: Choose Your Demo

Open your terminal and navigate into the directory of the demo you wish to run. For example:

```bash
cd aihr-external-api-access-saml-demo
```

### Step 2: Configure Your Credentials

This is the most important step. Inside the demo folder you just entered, open the `auth.js` file. You **must** replace the placeholder values with your specific Auth0 application details.

```javascript
// auth.js
import { Auth0Client } from "https://cdn.jsdelivr.net/npm/@auth0/auth0-spa-js@2.0.4/+esm";

export const auth0 = new Auth0Client({
  // 👇 REPLACE THESE VALUES WITH YOUR CREDENTIALS
  domain: "<YOUR_AUTH0_DOMAIN>", // e.g., "your-tenant.auth0.com"
  clientId: "<YOUR_AUTH0_CLIENT_ID>", // The Client ID of your Auth0 SPA Application
  authorizationParams: {
    redirect_uri: window.location.origin + "/",
    scope: "openid profile email",
    audience: "<YOUR_API_AUDIENCE>", // The unique identifier for your API in Auth0
  },
  cacheLocation: "localstorage",
});
```

> **Note:** If you are running the `saml-demo`, you may also need to provide a `connection` parameter inside `authorizationParams` to target a specific SSO connection. This helps to skip AIHR centralized login window at the beginning and directly opens the login window of your identity provider.

### Step 3: Run the Demo

Once the `auth.js` file is configured, run the following command from within the demo's directory:

```bash
npx serve
```

Now, open your web browser and go to the local address provided by `serve` (usually `http://localhost:3000`). You should see the application running\!
