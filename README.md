# Evaluate News with NLP

## project Instructions
* [Introduction](Introduction)
* [Getting start](Getting%20start)
* [Setting up the API](Setting%20up%20the%20API)
* [Using the API](Using%20the%20APT)
* [Credits](Credits)

## Introduction
### What is NLP?
In Wikipedia definition :
> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

### The goal of the project
the goal of this project is to give practice with:
* Setting up Webpack.
* Sass styles.
* Webpack Loaders and Plugins.
* Creating layouts and page design.
* Service workers.
* Using APIs and creating requests to external urls.

## Getting start
* get your basic project setup and functioning.
* the gitignore file must include node_modules and dist folder.
* configure your project with Nodejs and npm.
* install your dependencies and devdependencies.
* your dependencies should include Express, Webpack.
* you should have 3 scripts in your package.json:
  * start build to run Express server.
  * build-dev to run webpack develop mode.
  * build-prod to run webpack production mode.
* There must be a styles or scss folder.
* The app should make a successful call to the api on form submission.
* The project must have set up service workers in webpack.
* Check your javascript files with jest and all tests should pass. Every src/js file should have at least one test.

## Setting up the API
1. ### Signup for an API key
    * first sign up in this [site](https://developer.aylien.com/signup) and get your API.
    * the API is free to use up to 1000 requests per day.
2. ### Install SDK
    * Read the documentation [here](https://docs.aylien.com/textapi/sdks/#sdks)
3. ### Require the SDK package
    * After installing the SDK, set up your index.js inside server file.
    * index.js file must contain Aylien package.

4. ### Environment Variables
    * declare your API key but you should encrypt it as private key and your project will be publicly available in Github.
    * you can install dotenv package ``` npm install dotenv ``` which allows you to encrypt your private data.
    * create .env file and add your private key inside it.
    * you should add this .env file to .gitignore
## Using the API
* read the [api documentation](https://docs.aylien.com/textapi/endpoints/#api-endpoints) and you are now ready 😃.
* after you successfully using the API there are other steps you should take:
  * Parse the response body to dynamically fill content on the page.
  * Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements. You should add [Jest](https://jestjs.io/en/) to your project to handle testing as well.
  * using jest is very easy just follow its [documentation](https://jestjs.io/docs/en/getting-started) and you will be fine
  * Go back to the web pack config and add the setup for service workers.
  * Test that the site is now available even when you stop your local server

## Credits
This starter coder if from Udacity, Thanks to [Udacity](https://www.udacity.com/) and its team. they are very helpful 😍
