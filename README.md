# Shareable Webpack Config Files

## Before you proceed

This configuration assumes that an adequate babel configuration is present in your project and that `babel-core` has already been installed in the project it is being added to.

## Adding to your project
  * Add this repository as a submodule.
  ```
  $ git submodule add <repository> <path>
  ```
  This will clone the repository into the provided `<path>` and initialize it as a submodule.

  * Create a `.webpackrc` file in the root of your project -- an example `webpackrc.default` is provided.
  ```
  $ cp <path>/webpackrc.default <root>/.webpackrc
  ```
  This file holds the entry and output points your webpack config files will be leveraging. Modify these entry and output points to better fit your project if needed.

  * Install dependencies.
  ```
  $ node <path>
  ```
  This will spawn a child process that will install the necessary dependencies for these webpack config files to work. Add `--yarn` to this command to use `yarn` instead of `npm`.

  * **OPTIONAL** / Symlink the webpack config files to the root of your project.
  ```
  $ ln -s <path>/webpack.config.* <root>
  ```
  You can point your scripts or CLI's to the webpack config files living inside `<path>`. I prefer having the webpack config files living next to `package.json` in the root of my project, which is why I prefer to use symlinks. Up to you.

## Initializing the submodule
```
$ git submodule update --init --recursive
```
This command will recurse into the registered submodules, update and initialize (if required) them and any nested submodules within.

## Pulling from this repository
```
$ git submodule foreach --recursive git pull
```
This command will evaluate the command in each checked out submodule.

## Pushing to this repository
```
$ git submodule foreach --recursive git push
```
This command will evaluate the command in each checked out submodule.

## Usage
These webpack config files will work in any way you wish to use them (CLI, API, etc.).

### Webpack Dev Server CLI
```
$ webpack-dev-server --config <path>/webpack.config.hot.babel.js
```

### Webpack CLI

#### Module / Library
Use this one if you are building a library or Node module.
```
$ webpack --config <path>/webpack.config.lib.babel.js
```

#### Distribution
Use this one if you are building an application and want to bundle up the static files.
```
$ webpack --config <path>/webpack.config.dist.babel.js
```
