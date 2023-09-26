# Intro

The back office will have server side and a client side to maintain the MVC spirit (for security purpose).

The client side will communicate with the server side through a REST API.

This project will be built from scratch.

## To know

$ npm init -y

=> This command will initiate a node environeent and create a package.json file (configuration of the project, list of dependencies).
(A React app needs a node environment to run, we are building it from scratch)
The -y option stands for yes, it will answer yes to all the questions asked by npm.

$ npm i --save-dev <module_name>

=> This command will install a module and save it in the package.json file as a dev dependency (dev dependency = during development, not included in the release).
The i option stands for install, the --save-dev option stands for save the module as a dev dependency.

To run a js file

$ node <file_name>.js
