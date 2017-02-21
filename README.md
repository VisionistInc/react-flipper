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

  * **OPTIONAL** / Symlink the webpack config files to the root of your project.
  ```
  $ ln -s <path>/webpack.config.* <root>
  ```
  You can point your scripts or CLI's to the webpack config files living inside `<path>`. I prefer having the webpack config files living next to `package.json` in the root of my project, which is why I prefer to use symlinks. Up to you.


## Pulling from this repository
  * Using `update`
  ```
  $ git submodule update --init --recursive
  ```
  This command will recurse into the registered submodules, update and initialize (if required) them and any nested submodules within.

  * Using `foreach`
  ```
  $ git submodule foreach --recursive git submodule update --init
  ```
  This command will evaluate the command in each checked out submodule. So it will update and init (if required) each submodule and any nested submodules within due to --recursive.

In the end, both commands achieve the same thing. Only the execution differs: the first command won't step into each directory to execute the command.

## Pushing to this repository
  * Pushing to defaults
  ```
  $ git submodule foreach --recursive git push
  ```
  This command will evaluate the command in each checked out submodule. So it will push each submodule and any nested submodules within to their respective default branches due to --recursive.

  * Pushing to another remote or branch
  ```
  $ cd <path>
  $ git push -u <remote> <branch>
  ```
  You will need to `cd` into every individual submodule and push like you would any other repository.

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
