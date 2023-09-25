# TP2

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

Webpack is a module bundler. Its primary purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Exercise 7:

The webpack.config.js file is ready to build the aggregated bundle in development mode. The entry point is src/index.js. Bundle should be output at dist/index.js. You can run webpack using npm run build.
