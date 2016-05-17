var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require('gulp-webpack');

var paths = {
  scripts: ['server.js', 'router/routes.js']
};


gulp.task("client", function () {
  return gulp.src("./src/js/routes.js")
      .pipe(webpack(require('./webpack.config.js') ))
      .pipe(gulp.dest("./build"));
});

gulp.task("server", function () {
  return gulp.src(paths.scripts)
      .pipe(babel())
      .pipe(gulp.dest("./build"));
});

gulp.task('default', ['client', 'server'], function() {
});
