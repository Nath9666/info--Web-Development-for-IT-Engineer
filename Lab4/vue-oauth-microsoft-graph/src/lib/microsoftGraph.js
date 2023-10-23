import * as msal from "@azure/msal-browser";

const requestedScopes = { scopes: ["User.Read"] };
const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
    redirectUri: "http://localhost:8080/",
  },
  cache: { cacheLocation: "sessionStorage" },
});

msalInstance.initialize().then(() => {
  console.log("MSAL initialized");
});

export async function signInAndGetUser() {
  try {
    const authResult = await msalInstance.loginPopup(requestedScopes);

    msalInstance.setActiveAccount(authResult.account);
    return { account: authResult.account, ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
