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

