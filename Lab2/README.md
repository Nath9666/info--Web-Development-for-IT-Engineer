# TP2

On vous informe que le dossier node_module n'est pas present pour des raisons d'optimisation de donnée

[Enoncé du TP2](https://thomas-veillard.fr/front-end-web-development/languages/javascript-practical-activity-n2/)

## Exercice 1

```
Open index-es6-modules.html in your browser from the file browser (using « open with Chrome / Firefox / Edge » contextual menu). What is the error revealed inside the browser console?
```

The browser console shows the following error:

<html>
    <text style="color:red">
        Access to script at 'file:///C:/Users/Nathan/OneDrive%20-%20Efrei/-%20Efrei/M1/S7/info--Web-Development-for-IT-Engineer/Lab2/basic-rate-graph/src/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, isolated-app, brave, https, chrome-untrusted, data, chrome-extension, chrome.
index.js:1     Failed to load resource: net::ERR_FAILED
    </text>
</html>

So the browser is blocking the access to the file because it is not served by a web server.

## Exercice 2

```
Launch a local HTTP server (seen in the lecture) and run the application from it. Then, inspect the HTTP traffic and record some statistics:
```

- How many JS files were loaded ?
  There are 4 JS files loaded
- How long does it take on average to load one ES6-module ?
  4 ms on average to load one ES6-module
- What is the total completion time to load all JS files ?
  The total completion time to load all JS files is 20ms
- Did the browser download JS files sequentially or in parallel ?
  The browser downloaded JS files in parallel (4 at the same time)

## Exercice 3

```
Discuss the performance penalty of serving ES6-modules as independent files to the browser. How to mitigate this performance issue?
```

The performance penalty of serving ES6-modules as independent files to the browser is that the browser has to make a request for each file, which takes time. To mitigate this performance issue, we can use a bundler like Webpack to bundle all the files into one.

## Exercise 4

```
Install dependencies using the npm install command. Dependencies are locally stored inside the node_modules folder. Why is there far more many modules into node_modules that those declared in package.json ?
```

There are far more many modules into node_modules that those declared in package.json because some modules have dependencies themselves, so they are installed too.

## Exercise 5:

```
The rate history app is potentially vulnerable to a high-level security issue through one of its dependencies. Using npm, find all vulnerable packages and associated version. In which release those bug have been fixed?
```

npm audit

<html>
    <text style="color:red">
        npm ERR! code ENOLOCK <br>
        npm ERR! audit This command requires an existing lockfile.<br>
        npm ERR! audit Try creating one first with: npm i --package-lock-only<br>
        npm ERR! audit Original error: loadVirtual requires existing shrinkwrap file<br>
        npm ERR! A complete log of this run can be found in:<br>
        npm ERR! <br>C:\Users\Nathan\AppData\Local\npm-cache_logs\2023-09-25T22_02_08_509Z-debug-0.log<br>
    </text>
</html>

## Exercise 6:

Look at the webpack documentation (both home page and the concepts). What is its primary purpose and how does it fix our performance issue previously encountered with ES6-modules?

```
Webpack is a module bundler. Its primary purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
```

## Exercise 7:

The webpack.config.js file is ready to build the aggregated bundle in development mode. The entry point is src/index.js. Bundle should be output at dist/index.js. You can run webpack using npm run build.

## Exercise 8:

Open index-bundled.html in your browser (could be from the disc or from HTTP server). Does it actually fix the ES-module fetching performance issue ? Please provide some evidence in your answer.

```
Now when you launch it, you get the message "JS has been loaded succesfully".
In addition, it is now possible to interact with the drop-down menu available when index-es6-modules.html is launched. And it displays something, as opposed to site index-bundled.html, which displayed nothing.
```

Evidence :
![Alt text](./Lab2/img/Exercice_8.png?raw=true "Title")

## Exercise 9:

Compare webpack’s output in development and in production mode:

```
The output of development will contain comments which explain the code and the criteria while the produciton mode will just produce the pure functional code.
```

## Exercise 10:

Try the bundled app with Internet Explorer 11. Why IE does it fail to run the bundled app?

```
The bundled app fails to run in Internet Explorer 11 because IE 11 lacks support for certain JavaScript features and APIs that are used in the app.
```

## Exercice 11:

The following webpack’s configuration sends every .js to babel-loader. Babel transforms any syntax not supported by IE 11. Is it enough to ensure compatibility with IE? Why?

```
No, even though as the code in babel-loader indicated it is targeted for IE 11, but IE 11 requires more polyfills for the js features. In this case, we havn't imported core-js and whatwg-fetch (in case of using fetch fonction) which is essential for the applicaiton.
```

## Exercice 12:

Import the required polyfills from core-js and whatwg-fetch in index.js. Now, the app should work on IE 11.

![Alt text](./Lab2/img/Exercice_12.png?raw=true "Title")

## Exercice 13:

List at least 2 issues of transpiling the code and adding polyfills like we did. Try to mention a mitigation or a solution for each issue.

```
Lors de la transpilation du code et de l'ajout de polyfills, il y a effectivement plusieurs problèmes potentiels auxquels nous devons faire face. Voici deux des problèmes les plus courants et leurs solutions possibles :

Taille du bundle résultant : Lorsque nous transpilons notre code pour le rendre compatible avec des navigateurs plus anciens et que nous ajoutons des polyfills, cela peut augmenter considérablement la taille du bundle final. Cela peut entraîner des temps de chargement plus longs pour les utilisateurs, en particulier sur des connexions Internet plus lentes.

Solution : Pour atténuer ce problème, nous pouvons utiliser des outils tels que Webpack pour diviser notre bundle en chunks, ce qui permet de charger uniquement le code nécessaire à une page donnée. De plus, nous pouvons envisager d'utiliser des services de diffusion de contenu (CDN) pour servir nos polyfills à partir de serveurs distribués, réduisant ainsi la latence de chargement.

Compatibilité et performances : L'ajout de polyfills peut résoudre les problèmes de compatibilité, mais cela ne garantit pas toujours des performances optimales sur les navigateurs plus anciens. Certains polyfills peuvent être gourmands en ressources et ralentir l'exécution du code.

Solution : Pour remédier à ce problème, nous pouvons utiliser des polyfills légers et spécifiques à nos besoins. Il est essentiel de tester notre application sur différents navigateurs pour identifier les goulots d'étranglement de performance et d'appliquer des optimisations spécifiques, comme le lazy loading des polyfills lorsque cela est possible.

En résumé, la transpilation du code et l'ajout de polyfills sont des étapes essentielles pour garantir la compatibilité du code avec les navigateurs plus anciens, mais elles peuvent introduire des problèmes de taille de bundle et de performances. En utilisant des stratégies intelligentes de gestion de bundle et en optimisant l'ajout de polyfills, nous pouvons minimiser ces problèmes.
```
