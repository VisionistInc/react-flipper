# Shareable Webpack Config Files

## Adding to your project
Make sure your are in the root of your project before proceeding.

  * Add remote that points to this repository
  ```
  $ git remote add <remote> git@github.com:enriquecaballero/webpack-config.git
  ```
  This will significantly simplify the commands, so that you don’t have to specify the repository’s address all the time.

  * Add as a git subtree to your existing repository
  ```
  $ git subtree add --prefix <prefix_path> <remote> <branch>
  ```
  You use subtree add to add this repo’s code into a path in your project, specified by **prefix**. The last two parameters are the remote you previously created and the branch you are pulling code from (webpack-config/master), respectively.

  * Symlink the webpack.config.* files to the root of your project (optional)
  ```
  $ ln -s <prefix_path>/webpack.config.* <root>
  ```
  You can point your package.json scripts or the webpack server files (if you are using the Webpack and Webpack Dev Server Node API's) to the webpack config files living inside /config, but I prefer having the webpack config files living next to package.json in the root of my project.

## Pulling from this repository
```
$ git subtree pull --prefix <prefix_path> <branch>
```

This will execute a pull, using the “subtree” merge strategy and generate a merge commit.


## Pushing to this repository
```
$ git subtree push --prefix <prefix_path> <branch>
```
This will make git go through the commits and pick the changes that should be pushed to the repo. Files outside of the prefix directory get filtered out.
