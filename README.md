# Test Suite
Test Suite helps quickly test the code that you have written without the need to constantly refresh your browser.

**Features:**
- Quickly switch between different test suites
- Continue coding without needed to refresh your browser to see the status of your tests

# Prerequisites
* [Node](https://nodejs.org/en/) installed 
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed globally


# Installation
1. Install [livereload chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
2. Navigate to the root directory of Test Suite
3. Run 'npm install' to install the dependencies needed
4. Place your tests inside 'code' folder
5. Create a new file called config.js in base directory

Each test requires certain properties: 

* folder   **[ Required ]**
  * The directory to the main folder
  * All code changed in this folder will automatically notify livereload
* testPage **[ Required ]**
  * Path to test html page
  * This is the HTML page that display the status of your tests
* library  **[ Optional ]**
  * Path to library folder required for tests
  * Any folder that has the depencies needed to run your test.
  * Make sure that the script src in the testPage HTML points to /lib
  * If none is specified, it will assume the dependecies are in the folder path

Sample config file:
```
var testNumber = 2; // Specify the test you want to run
module.exports = [ 
  { // Test Number 1
    folder: 'someFolder/',
    library: 'someFolder/lib/',
    testPage: 'someFolder/test.html'
  },

  { // Test Number 2
    folder: 'someFolder/',
    testPage: 'someFolder/test.html'
  },
][testNumber-1];
```

# Using Test Suite
1. Navigate to root directory in terminal
2. Type and run 'gulp run' 
3. Navigate to [localhost](http://localhost:3000) in your chrome browser
4. Turn on livereload chrome extension
5. Start coding!




