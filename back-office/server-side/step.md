### Server side

We will first install Typescript as a dev dependency (Note that Typescript is just for development, it will always be translated to JS).

$ npm i -D typescript (-D = --save-dev)

Then we will create a tsconfig.json file (configuration file for Typescript).
A Typescript project needs a typescript configuration file, it will be used by the Typescript compiler to know how to translate the Typescript code to JS code and how it should behave.

=> $ npx tsc --init

(tsc = Typescript compiler, --init = create a tsconfig.json file)
npx executes packages, it does not install them.

Now we are going to install Express (a web framework that provides a robust feature set for web [to be simple, it will help us build the webapi server]) as a dependency (not a dev dependency).

$ npm i express

This module is for javascript, not for Typescript, so we need to install the types for Typescript version of Express. (Almost all the modules have a Typescript version, we just need to install it)

$ npm i -D @types/express

Do not forget that we are using Typescript, so we need to translate the Typescript code to JS code.

=> $ npx tsc

This will generate the js file. You can change the output directory in the tsconfig.json file (by changing the property "outDir").

We want our server to restart whenever we make a change in the code, so we will install nodemon as a dev dependency for that feature.

$ npm i -D nodemon

Remember that this will only work with js, we must install another module for Typescript. It is called ts-node.

$ npm i -D ts-node

Now if we want to run the server, we will use the command

$ npx nodemon path/to/main/ts/file.ts

This will only work for Typescript if the ts-node module is installed.
Now our server supports Hot Reload (restart whenever we make a change in the code).

As we can see, this command is pretty long.
We can help that by modifying the package.json file.
In the script section, we can add a new script that will run the server.
As a convention, we will name it start.
scripts: {
"start": "nodemon path/to/main/ts/file.ts" (npx is not needed anymore)
}

Now we can run the server with the command

$ npm start

By this, we won't need to compile the Typescript code to JS code anymore, nodemon will do it all for us.

We will also use ESLint to help us write clean code (for checking errors...).
(ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code)

$ npm i -D eslint

Like Typescript, ESLint needs a configuration file.

=> $ npx eslint --init

This will create a .eslintrc.json file (configuration file for ESLint).
To use the eslint (like for checking warnings/errors), we need to run the command

$ npx eslint path/to/file.ts

Note that VS Code has an ESLint extension doing all this job for us.
