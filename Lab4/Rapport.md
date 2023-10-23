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

### First solution, use props and events through component tree.

#### Exercice 2

> Use props to share the user with both SigninComponent and HomePage. Then use events to update the shared user from SigninComponent. Eventually, display the user name in HomePage.

So we modify the page signinButton.vue to add the props and the event.

We emit the event in the signinButton.vue and we catch it in the baseHeader.vue and we pass it in the baseContent.vue and finally in the homePage.vue.

#### Question 3

> While being a well-working solution, it suffers from maintainability issues. Please expose and discuss them.

The problem is that we have to pass the user in all the components. If we have a lot of components, it can be a problem.

### Second solution, use provide and inject.

#### Exercice 3

> Replace every needed user props by an inject and remove transitional props that are not useful anymore. For now, you can keep the userChanged event chain. Be sure to make your inject reactive.

So we modify the page signinButton.vue to add the provide and the inject. We remove the props and the event.
We use the provide to share the user with the other components inside just the basecontent so we passe the user in the footer to use it. 

#### Question 4
> What is the bug if the inject is not reactive?

If the inject is not reactive, the user will not be updated when we change it.

### Third solution, use a store library like vuex.

#### Exercice 4

> Move the user property from the App component state to a store managed with vuex. Drop the event chain and let SigninButton directly call a mutation in the store.

So we modify the page signinButton.vue to call a mutation in the store. We remove the provide and the inject. We remove the props and the event.

#### Question 5
> Build a comparison table between the various state management strategies available, especially about pro and cons. Optionally, feel free to explore other ways not covered in that tutorial.

| Strategy | Pros | Cons |
| --- | --- | --- |
| Props and events | Easy to implement | If we have a lot of components, it can be a problem |
| Provide and inject | Easy to implement | If we have a lot of components, it can be a problem |
| Vuex | Easy to implement | If we have a lot of components, it can be a problem |

#### Question 6

> Imagine a developer in your team suggests to exclusively manage the state with stores. Therefore, it recommends not to rely on props and provide anymore. Would you accept this? An argued answer is expected.

I think it's a bad idea because it's not a good practice to use only one strategy. We have to use the strategy that is the most adapted to the situation.

## Client-side routing


