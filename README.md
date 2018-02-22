# Electron Typescript Starter Kit

This starter kit should save you the setup work to wire up TypeScript with [Electron](https://electronjs.org/).
By the end, you'll have

* a project base with Electron and TypeScript
* with a build system with [Webpack](https://webpack.js.org/)
* linting with [TSLint](https://palantir.github.io/tslint/)
* SCSS integration [SCSS](https://sass-lang.com//)


# Setup a new project

We assume that you're already using [Node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/).
We'll create a new project called `my-app`:

```shell
git clone https://github.com/gorillabyte/electron-typescript-starter-kit my-app
cd my-app
npm install
```

You can also use [yarn](https://yarnpkg.com/lang/en/):

```shell
git clone https://github.com/gorillabyte/electron-typescript-starter-kit my-app
cd my-app
yarn
```

At this point, your project layout should look like the following:

```text
my-app/
├─ .babelrc
├─ .gitignore
├─ node_modules/
├─ src/
│  └─ ...
├─ templates/
│  └─ ...
├─ package.json
├─ tsconfig.json
└─ tslint.json
└─ webpack.config.js
```

Of note:

* `tsconfig.json` contains TypeScript-specific options for the project.
* `tslint.json` stores the settings that our linter, [TSLint](https://github.com/palantir/tslint), will use.
* `package.json` contains our dependencies, as well as some shortcuts for commands we'd like to run during development and deploying our app.
* `src` contains our TypeScript and CSS code. `main.ts` is the entry-point for the Electron app and `app.ts` is the application running in the Electron window, they are mandatory.
* `templates` contains our SCSS code and the HTML template for the app. The `index.html` will be copied during the build step to the build folder.
* `webpack.config.js` contains the Webpack configuration.

# Running the project in development

Running the project is as simple as running

```sh
npm run dev
```

This runs the `dev` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:3001`.

This tightens the iteration loop by allowing us to quickly preview changes during development.

# Running the project in an electron window

To run your project within the electron environment simply run

```sh
npm run app
```

# License
This project is licensed under the MIT license, Copyright (c) 2018 Gorillabyte. For more information see LICENSE.
