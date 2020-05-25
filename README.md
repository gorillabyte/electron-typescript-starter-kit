# Electron Typescript Starter Kit

This starter kit should save you the setup work to wire up [Webpack](https://webpack.js.org/), TypeScript and [Electron](https://electronjs.org/).
By the end, you'll have:

* A project base Electron and TypeScript
* with a build system with [Webpack](https://webpack.js.org/)
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
├─ .gitignore
├─ .npmrc
├─ .prettierrc
├─ node_modules/
├─ src/
│  └─ ...
├─ templates/
│  └─ ...
├─ package.json
├─ tsconfig.json
├─ tslint.json
└─ webpack.config.js
```

Of note:

* `tsconfig.json` contains TypeScript-specific options for the project.
* `package.json` contains our dependencies, as well as some shortcuts for commands we'd like to run during development and deploying our app.
* `src` contains our TypeScript and CSS code. `main.ts` is the entry-point for the Electron app and `renderer.ts` is the application running in the Electron window, they are mandatory.
* `templates` contains our SCSS code and the HTML template for the app. The `index.html` will be copied during the build step to the build folder.
* `webpack.config.js` contains the Webpack configuration.

# Running the project in development

Running the project is as simple as running

```sh
npm run dev
```

This runs the `dev` script specified in our `package.json`, and will spawn off a server which reloads and serves the page in the Electron app as we save our files.
Normally the server runs at `http://localhost:9000`.

This tightens the iteration loop by allowing us to quickly preview changes during development.

# Running the project in an electron window

To run your project within the electron environment simply run

```sh
npm run start
```

# License
This project is licensed under the MIT license, Copyright (c) 2020 Gorillabyte. For more information see LICENSE.
