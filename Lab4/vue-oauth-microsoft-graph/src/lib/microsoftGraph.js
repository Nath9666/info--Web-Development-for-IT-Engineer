// file src/lib/microsoftGraph.js
import * as msal from "@azure/msal-browser";

/**
 * List the requested scopes (aka. the requested permissions)
 */
const requestedScopes = {
  scopes: ["User.Read"],
};

let msalInstance = null;
let isMsalInitialized = false;

export async function initializeMsal() {
  msalInstance = new msal.PublicClientApplication({
    auth: {
      clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
    },
    cache: {
      cacheLocation: "sessionStorage",
    },
  });
  console.log("MSAL initialized");
  isMsalInitialized = true;
}

export async function signInAndGetUser() {
  if (!isMsalInitialized) {
    throw new Error("MSAL not initialized. Call initializeMsal first.");
  }

  const authResult = await msalInstance.loginPopup(requestedScopes);
  msalInstance.setActiveAccount(authResult.account);
  return authResult.account;
}
