# Vue : practical actity

[Subject](https://thomas-veillard.fr/front-end-web-development/vue/02-vue-practical-activity-part-n2/)

## The SigninButton component

### Question 1

> Why you should not commit credentials on git?

Because it's a public repository and everyone can see it. It's a security issue.

### Question 2

> Why may you want different configurations depending on the environment? Give an example.

Because you may want to use different API keys depending on the environment. For example, you may want to use a test API key for the development environment and a production API key for the production environment.

### Exercice 1

> I already wrote helpers on top of msla (see the file src/lib/microsoftGraph.js above). Import them for use in your SigninButton component. For now, SigninButton stores the resolved user inside its own state (the data property of your component) and displays it in the template.

So to start the exercice, we copy the repository on [Lab3](..\Lab3) and we install the dependencies with `npm install`.
Then we create a new component `SigninButton.vue` in the `src/components` folder.

We take the api code in the [Azure link](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Overview/appId/196ef638-917b-4f82-b655-7d3c80154af4/objectId/0662321b-23ab-4dd8-be09-9a0ee316d37c/isMSAApp~/false/defaultBlade/Overview/appSignInAudience/AzureADandPersonalMicrosoftAccount/servicePrincipalCreated~/true) and we put in the .env.development.local file.

So to correctly use the api, we need to check 2 or more things :

- we have on your machine the right version of azure/msal-browser (3.2.0)
- we have the right VUE_APP_CLIENT_ID in the .env.development.local file (196ef638-917b-4f82-b655-7d3c80154af4)
- we have to verify that the redirectUri in [microsoftGraph](.\vue-oauth-microsoft-graph\src\lib\microsoftGraph.js) for exemple in my machine is http://localhost:8080/ (the port can change depending on the port used by the server)

Then we can start the server with `npm run serve` and we can see the button on the page.

If there are a bug, check on the browser's console

### Exercice 2

> Use props to share the user with both SigninComponent and HomePage. Then use events to update the shared user from SigninComponent. Eventually, display the user name in HomePage.

So we modify the page
