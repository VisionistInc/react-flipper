# Shareable React App Config Files

## Adding to your project
Make sure your are in the root of your project before proceeding.

  * Use `git subtree` to add to your existing repository.
  ```
  $ git subtree add --prefix <path> <repository> <branch>
  ```
  Using `git subtree` allows developers to customize these files as needed. Any commits to these files will belong to the parent project's git repository.  Changes to the files from this repository can continue to be merged into the parent project's changes (see [Pulling from this Repository](#pulling))


  * Run the install script provided in this repository.
    ```
    $ node <path>/install.js
    ```

    If you prefer to use `yarn`, simply add `--yarn` to the previous command.
    ```
    $ node <path>/install.js --yarn
    ```

  This script will install the required dependencies necessary for these config files to work and add them as `devDependencies` to your project's `package.json`.


## <a id="pulling"></a>Pulling from this Repository
```
$ git subtree pull --prefix <path> <branch>
```
This will execute a pull, using the `subtree` merge strategy and generate a merge commit. You should not lose any local modifications done to these files.


## Pushing to this repository
When you choose to contribute back to this repository, only do so when the code you will be contributing is not tied to any project whatsoever -- it is important to keep these config files project agnostic.
```
$ git subtree push --prefix <path> <branch>
```
This will make git go through the commits and pick the changes that should be pushed to the repository. Files outside of the prefix directory get filtered out. Once pushed, go to the repository and submit a Pull Request.

## Usage

### Webpack

#### Webpack Dev Server CLI
```
$ webpack-dev-server --config <path>/webpack.config.hot.babel.js
```

#### Webpack CLI

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
  "start": "webpack-dev-server --config <path>/webpack.config.hot.babel.js",
  "build": "npm run build:lib && npm run build:dist",
  "build:lib": "webpack --config <path>/webpack.config.lib.babel.js",
  "build:dist": "webpack --config <path>/webpack.config.dist.babel.js",
  "subtree:pull": "git subtree pull --prefix <path> <repository> master"
}
```
