
# React-Flipper

> React 'flipper' component that is agnostic to the height of its tiles, resizing accordingly.

## Get Started
* Clone the repository
```
git@github.com:VisionistInc/react-flipper.git
```

* Go into the cloned repository's directory
```
cd react-flipper
```

* Install dependencies
```
npm install
```

## Building the static files
Bundled static files will live inside the ```./dist``` directory
```
+ dist/
    |-- index.html
    |-- App.js
    \-- App.css
```

- Bundle static files and exit on finish

  ```
  npm run-script build
  ```

## Running the application for Development
- Bundle the static files, watch over development files, and start the server
```
npm run-script dev
```
Gulp will watch over all of your files and rebuild on save. It will also restart the Node server whenever you edit or modify any of the server files

- Open your browser and go to ```http://localhost:3003```

## Running the application for Production
- Bundle the static files and start the server
```
npm start
```

- Open your browser and go to ```http://localhost:3003```
