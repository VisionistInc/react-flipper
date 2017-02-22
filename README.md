# Shareable React App Config Files

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

Install the required dependencies by running the install script provided in this repository.

  * `npm`
  ```
  $ node <path>/install.js
  ```

  * `yarn`
  ```
  $ node <path>/install.js --yarn
  ```

These two commands achieve the same thing, the only difference is the package manager it will use.

### Webpack

These webpack config files will work in any way you wish to use them (CLI, API, etc.).

  * #### Webpack Dev Server CLI
  ```
  $ webpack-dev-server --config <path>/webpack.config.hot.babel.js
  ```

  * #### Webpack CLI

    * ##### Module

      Use this one if you are building a library or Node module.

      ```
      $ webpack --config <path>/webpack.config.lib.babel.js
      ```

    * ##### Application Distribution

      Use this one if you are building an application and want to bundle up the static files.

      ```
      $ webpack --config <path>/webpack.config.dist.babel.js
      ```

### dotfiles
Symlink all the provided dotfiles (`.babelrc`, `.eslintrc`, etc.) to the root of your project.
```
$ ln -s <path>/.* <root>
```

### Example NPM Scripts
```json
"scripts": {
  "start": "webpack-dev-server --config webpack.config.hot.babel.js",
  "build": "npm run build:lib && npm run build:dist",
  "build:lib": "webpack --config webpack.config.lib.babel.js",
  "build:dist": "webpack --config webpack.config.dist.babel.js",
  "subtree:pull": "git subtree pull --prefix config <repository|remote> master"
}
```
