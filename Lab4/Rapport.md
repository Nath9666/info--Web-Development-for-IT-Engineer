# Vue : practical actity

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
