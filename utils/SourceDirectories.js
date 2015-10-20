import fs from 'fs';
import path from 'path';
import { readdirSyncRecursive } from 'wrench';

/** Synchronously read every item
    inside a given path, returning an array of strings **/

let SourceDirectories = (pathToDirectory, format) => {
  pathToDirectory = '.' + pathToDirectory + '/';

  /** Read in the items
      inside the given path **/
  let directories = readdirSyncRecursive (path.resolve (__dirname, pathToDirectory));

  /** Filter out all read items
      that are not directo-ries **/
  directories = directories.filter ((item) => {
    let path_name = path.resolve (__dirname, pathToDirectory + item);
    if (fs.lstatSync (path_name).isDirectory ()) {
      return path_name;
    }
  });

  /** Convert the filtered items
      to their 'absolute' path if the isAbsolute flag is true **/
  if (format === 'absolute') {
    directories = directories.map ((directory) => {
      return path.resolve (__dirname, pathToDirectory + directory);
    }).concat (path.resolve (__dirname, pathToDirectory));
  } else {
    /** ...and as for 'relative' paths **/
    directories = directories.map ((directory) => {
      return pathToDirectory.substring (1) + directory;
    }).concat (pathToDirectory.substring (1));
  }

  /** Return the array of directories
      back to the Webpack configuration **/
  return directories;
}

export { SourceDirectories };
