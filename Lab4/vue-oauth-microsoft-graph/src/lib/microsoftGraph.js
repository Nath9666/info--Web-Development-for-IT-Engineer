import * as msal from "@azure/msal-browser";

const requestedScopes = { scopes: ["User.Read"] };
const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
    redirectUri: "http://localhost:8081/",
  },
  cache: { cacheLocation: "sessionStorage" },
});

export async function signInAndGetUser() {
  try {
    const authResult = await msalInstance.loginPopup(requestedScopes);
    msalInstance.setActiveAccount(authResult.account);
    console.log(authResult.account.username);
    return { account: authResult.account, ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
