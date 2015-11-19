# React JS

I'm learning react js. Using the boilerplate from https://github.com/christianalfoni/react-app-boilerplate.

* [Video Notes] (https://www.evernote.com/shard/s430/sh/5031e124-03b8-4a86-a591-174d703b3ffb/bc023335889ddd0c2899e7f14f3e81fc)


### Install

* Clone the repo
* Run `npm install`

### Development
* Run `NODE_ENV=development gulp`
* Go to `localhost:8889` to display the app
* Go to `localhost:8889/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `NODE_ENV=production gulp deploy`

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
