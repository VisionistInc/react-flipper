# Shareable Webpack Config Files

## Adding to your project
Make sure your are in the root of your project before proceeding.

  * Add remote that points to this repository
  ```
  $ git remote add <remote> <repository>
  ```
  This will significantly simplify the commands, so that you do not have to specify the repository address all the time.

  * Add as a git subtree to your existing repository
  ```
  $ git subtree add --prefix <path> <remote> <branch>
  ```
  You use subtree add to add this repository into a path in your project, specified by **prefix**. The last two parameters, respectively, are the remote you have just created and the branch you are pulling the code from (webpack-config/master).

  * Symlink the webpack.config.* files to the root of your project (optional)
  ```
  $ ln -s <path>/webpack.config.* <root>
  ```
  You can point your `package.json` scripts or the webpack server files (if you are using the Webpack Node API and/or the Webpack Dev Server Node API) to the webpack config files living inside `<path>`. I prefer having the webpack config files living next to `package.json` in the root of my project, which is why I prefer to use symlinks. Up to you.

  * Create a `paths.js` file inside `<path>` and replace values accordingly
  ```
  $ cp <path>/paths.js.default <path>/paths.js
  ```
  This file is ignored by Git because this file can vary per project.

### Note

This configuration assumes that an adequate babel configuration is present and that `babel-core` has already been installed in the project it is being added to.

## Pulling from this repository
```
$ git subtree pull --prefix <path> <branch>
```

This will execute a pull, using the “subtree” merge strategy and generate a merge commit.


## Pushing to this repository
```
$ git subtree push --prefix <path> <branch>
```
This will make git go through the commits and pick the changes that should be pushed to the repo. Files outside of the prefix directory get filtered out.

## Usage
These webpack config files will work in any way you wish to use them (CLI, API, etc.).

### Webpack Dev Server CLI
```
$ webpack-dev-server --config <path>/webpack.config.hot.babel.js
```

### Webpack CLI

#### Module
Use this one if you are building a library or Node module.
```
$ webpack --config <path>/webpack.config.lib.babel.js
```

#### Application Distribution
Use this one if you are building an application and want to bundle up the static files.
```
$ webpack --config <path>/webpack.config.dist.babel.js
```
