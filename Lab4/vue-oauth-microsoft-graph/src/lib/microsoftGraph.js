// file src/lib/microsoftGraph.js
import * as msal from "@azure/msal-browser";

/**
 * List the requested scopes (aka. the requested permissions)
 */
const requestedScopes = {
  scopes: ["User.Read"],
};

let msalInstance = null;

export function initializeMsal() {
  msalInstance = new msal.PublicClientApplication({
    auth: {
      clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
    },
    cache: {
      cacheLocation: "sessionStorage",
    },
  });
}

export async function signInAndGetUser() {
  if (!msalInstance) {
    throw new Error("MSAL not initialized. Call initializeMsal first.");
  }

  const authResult = await msalInstance.loginPopup(requestedScopes);
  msalInstance.setActiveAccount(authResult.account);
  return authResult.account;
}
