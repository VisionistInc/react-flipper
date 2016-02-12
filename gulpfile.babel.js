import gulp from 'gulp';
import watch from 'gulp-watch';
import less from 'gulp-less';
import concat from 'gulp-concat';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import watchify from 'watchify';
import reactify from 'reactify';
import babelify from 'babelify';
import { spawn } from 'child_process';
import run from 'run-sequence';
import { SourceDirectories } from './utils/SourceDirectories';

let _path = {
  ENTRY_POINT: './src/Example/App.jsx',
  OUTPUT_JS: 'App.js',
  OUTPUT_CSS: 'react-flipper.css',
  SERVER: [ './index.js', './server.js', './server/**/*' ],
  HTML: './src/*.html',
  LESS: './src/**/*.less',
  REACT: [ './src/**/*.jsx', './src/**/*.js' ],
  REACT_DIRECTORIES: SourceDirectories ('./src', 'relative'),
  SRC: './src',
  DIST: 'dist',
};

let _NODE = null;
let _WATCHER = null;
let _PRODUCTION = false;

let _browserify = () => {
  return browserify (_path.ENTRY_POINT, {
    cache: {},
    debug: true,
    transform: [ babelify, reactify ],
    extensions: [ '.js', '.jsx' ],
    paths: _path.REACT_DIRECTORIES,
    packageCache: {}
  });
};

let _getSourceDirectories = () => {
  return SourceDirectories (_path.SRC, 'relative');
};

let _error = function (error) {
  console.log (error.toString ());
};

gulp.task ('html', () => {
  return gulp.src (_path.HTML)
    .on ('error', _error)
    .pipe (gulp.dest (_path.DIST))
    .on('error', _error);
});

gulp.task ('less', () => {
  return gulp.src (_path.LESS)
    .on ('error', _error)
    .pipe (less ())
    .on ('error', _error)
    .pipe (concat (_path.OUTPUT_CSS))
    .pipe (gulp.dest (_path.DIST));
});

gulp.task ('watchify', () => {
  if (_WATCHER) _WATCHER.close ();
  _WATCHER = watchify (_browserify ());
  _WATCHER
    .bundle ()
    .on ('error', _error)
    .pipe (source (_path.OUTPUT_JS))
    .on ('error', _error)
    .pipe (gulp.dest (_path.DIST))
    .on ('error', _error);
});

gulp.task ('browserify', () => {
  if (_PRODUCTION) {
    return _browserify ()
      .bundle ()
      .on ('error', _error)
      .pipe (source (_path.OUTPUT_JS))
      .on ('error', _error)
      .pipe (gulp.dest (_path.DIST))
      .on ('error', _error);
  } else {
    _WATCHER
      .bundle ()
      .on ('error', _error)
      .pipe (source (_path.OUTPUT_JS))
      .on ('error', _error)
      .pipe (gulp.dest (_path.DIST))
      .on ('error', _error);
  }
});

gulp.task ('server', () => {
  if (_NODE) _NODE.kill ();
  _NODE = spawn ('node', ['index.js'], { stdio: 'inherit' });
  _NODE.on ('close', (code) => {
    if (code === 8) {
      console.log ('Error detected; waiting for changes...');
    }
  })
});

gulp.task ('build', () => {
  _PRODUCTION = true;
  return run (['html'], ['less'], ['browserify']);
});

gulp.task ('deploy', () => {
  _PRODUCTION = true;
  return run (['html'], ['less'], ['browserify'], () => {
    gulp.start ('server');
  });
});

gulp.task ('start', () => {
  return run (['html'], ['less'], ['watchify'], () => {
    run (['server'], function () {
      watch (_path.SERVER, () => {
        gulp.start ('server');
      });
      watch (_path.HTML, () => {
        gulp.start ('html');
      });
      watch (_path.LESS, () => {
        gulp.start ('less');
      });
      watch (_path.REACT, () => {
        if (_getSourceDirectories ().length !== _path.REACT_DIRECTORIES.length) {
          _path.REACT_DIRECTORIES = _getSourceDirectories ();
          gulp.start ('watchify');
        } else {
          gulp.start ('browserify');
        }
      });
    })
  })
});

gulp.task ('default', ['start']);

process.on ('exit', () => {
  if (_NODE) _NODE.kill ();
})
