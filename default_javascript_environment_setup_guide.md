# Default steps to create convenient `JavaScript` development environment

## 1. Create folder structure
* src - for `JavaScript` files

## 2. Create initial files
* src/index.js - main `JavaScript` file
* index.html - main `HTML` file
* webpack.config.js - webpack configuration file

## 3. Initialize `Node Package Manager`
`npm init` in the console

## 4. Instal `webpack` client
`npm install webpack webpack-cli --save-dev`

## 5. Create initial `webpack` setup in configuration file - webpack.config.js
```javascript
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
  };
```

## 6. In `package.json` file add script to create webpack bundle
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
```
Now script to create js bundle `npm run build` can be run

## 7. Load `main.bundle.js` in `index.html` file
```html
  <script src="./dist/main.bundle.js"></script>
```

## 8. Install `babel` loader for webpack
`npm install -D babel-loader @babel/core @babel/preset-env webpack`

## 9. Install `babel` transformation plugin for webpack
development dependency: `npm install --save-dev @babel/plugin-transform-runtime`
production dependency: `npm install --save @babel/runtime`
This allows to use `async/await` syntax

## 10. Update `webpack` setup with babel configuration - webpack.config.js
```javascript
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ["@babel/plugin-transform-runtime"],
            }
          }
        }
      ]
    }
  };
```

## 11. Install ESLint static code analysis tool
`npm install eslint --save-dev`

## 12. Setup ESLint configuration file
`npx eslint --init`
* How would you like to use ESLint? _To check syntax, find problems, and enforce code style_
* What type of modules does your project use? _JavaScript modules (import/export)_
* Which framework does your project use? _None of these_
* Does your project use TypeScript? _No_
* Where does your code run? _Browser_
* How would you like to define a style for your project? _Use a popular style guide_
* Which style guide do you want to follow? _Airbnb: https://github.com/airbnb/javascript_
* What format do you want your config file to be in? _JavaScript_

## 13. Create ESLint ignore file `.eslintignore`
```javascript
  /dist/*.js
```

## 14. Install Prettier code formatter
prettier packages: `npm install --save-dev prettier`
prettier integration with eslint: `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`

## 15. Update ESLint configuration file `.eslintrc.js`
```javascript
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
```

## 16. Create Prettier configuration file `.prettierrc.json`
```javascript
  {
    "singleQuote": true,
    "printWidth": 120,
    "trailingComma": "es5"
  }
```