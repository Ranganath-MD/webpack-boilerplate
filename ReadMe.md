# Webpack - React - Typescript configurations

# Add Webpack

1. Create public folder and create index.html under public
   folder like `/public/index.html`

2. Create src folder and create index.js under src folder
   like `/src/index.js`

3. Create `package.json` by running `yarn init -y`

4. Need to install webpack

`yarn add webpack webpack-dev-server webpack-cli`

5. Create `webpack.config.js` file in the root of the app.

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    hot: true,
    port: 4000,
  },
};
```

6. add scripts to package.json

```json
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack-dev-server"
},
```

## Adding React

1. Install React and React DOM

`yarn add react react-dom`

2. Add below code to index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React with Webpack</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3. create App.js in src folder and add code below

```jsx
import React from "react";

export default function App() {
  return <h1>React App</h1>;
}
```

4. Add below code to index.js

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

5. Install `html-webpack-plugin`, The HtmlWebpackPlugin
   simplifies creation of HTML files to serve your webpack
   bundles.

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  ...
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
  ...
}

```

6. Add babel to compile js/jsx files

`yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react`

add loader to webpack config

```js
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
          ],
        },
      },
    },
  ],
},
```

7. add `mode` in the webpack file i.e
   `mode: process.env.NODE_ENV === 'production' ? 'production': 'development'`

run the application `yarn start`, We can see the app running

## Add CSS and SCSS to webapck

1. Install loaders to load the css /scss files

`yarn add -D style-loader css-loader scss sass-loader`

2. Add loaders to webpack rules

```js
module: {
    rules: [
      ...
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      ...
    ],
  },
```

3. Create index.scss file in the root

4. Import index.scss file in index.js file
   `import './index.scss'`

5. Add styles in index.scss

```scss
$dark: black;
$light: white;

body {
  background-color: $dark;
  color: $light;
}
```

Now you can see the change in the browser

## Add Typescript to Webpack

1. install typescript and its loader

`yarn add -D typescript ts-loader`

2. add tsconfig file at the root
`tsc init -y`

1. add ts loader to webpack config

```js
{
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: ["ts-loader"],
},
```

2. change the file name App.js to App.tsx, index.js to index.tsx
3. import it as tsx file in index.tsx

4. Change entry in webpack to `./src/index.tsx`

