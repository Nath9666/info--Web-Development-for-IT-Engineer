# Question and respond on Lab3

[Lab link](https://thomas-veillard.fr/front-end-web-development/vue/01-vue-practical-activity-part-n1/)

## Vue project setup

### Question 1

> That is the main difference between local installation and global installation of packages with npm? What kind of packages do you generally install locally? What kind is generally installed globally?

The main difference between local installation and global installation of packages with npm is that the local installation is only available for the project where it is installed. The global installation is available for all projects on the computer. The same parameters are used for both installations.

### Exercise 1

> Create a new Vue project (called vue-oauth-microsoft-graph). Opt for the Vue3 recipe that relies on webpack and babel for the build chain.

```bash
npm install -g @vue/cli
# verification que vue est intallée
vue --version
# creation du projet
vue create vue-oauth-microsoft-graph
```

### Question 2

> Webpack is internally used by the Vue CLI. Why is it required to deal with both multiple JavaScript files and special extensions like .vue?

Webpack is required to deal with both multiple JavaScript files and special extensions like .vue because it allows to bundle all the files into one file. It also allows to use the latest JavaScript features and to use a modular approach.

### Question 3

> What is the role of babel and how browserslist may configure its output?

Babel is a JavaScript compiler. It allows to use the latest JavaScript features and to use a modular approach. Browserslist is a configuration file that allows to specify the browsers that the project must support. Babel will then compile the code to be compatible with the specified browsers.

### Question 4

> What is eslint and which set of rules are currently applied? The eslint configuration may be defined in a eslint.config.js or in package.json depending on the setup.

Eslint is a tool that allows to find and fix problems in JavaScript code. The rules that are currently applied are the ones defined in the file .eslintrc.js.

### Exercise 2

> Run npm run serve and open the app in your browser. Remember that npm looks at the package.json file (specially the scripts object) to find which command to execute.

```bash
npm run serve
```

### Exercice 3

> The newly generated project contains a few placeholders. Cleanup your project so it does not contain neither useless assets, nor the hello world. In other words, delete HelloWorld.vue, its related assets and all its references. As at the end of each exercise, the vue cli should not report any error or warning.

to do that we have to delete the HelloWorld.vue file and the reference to it in the App.vue file.

### Exercise 4

> Create the HomePage component inside the right folder. Do not spend too much time on the template content, as it could be a simple sentence. Import it inside App.vue.

So you can find a file named HomePage.vue in the pages folder. I have also added a reference to it in the App.vue file.
[HomePage.vue](./vue-oauth-microsoft-graph/src/pages/HomePage.vue)

## Base layout

### Exercise 5

> Let’s begin with the root component, formally App (in src/App.vue). Replace its template with the following content and create the missing components. Add some content to the header (ex. fake home link, fake user name…) and legal credits to the footer. Eventually, polish the looks and feels with scoped CSS.
