/**
 * Gulpfile
 */
var gulp = require("gulp");
var eslint = require("gulp-eslint");
var jscs = require("gulp-jscs");

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
var JS_FILES = [
  "lib/**/*.js",
  "*.js"
];

// ----------------------------------------------------------------------------
// EsLint
// ----------------------------------------------------------------------------
gulp.task("eslint", function () {
  return gulp
    .src(JS_FILES)
    .pipe(eslint())
    .pipe(eslint.formatEach("stylish", process.stderr))
    .pipe(eslint.failOnError());
});

// ----------------------------------------------------------------------------
// JsCs
// ----------------------------------------------------------------------------
gulp.task("jscs", function () {
  return gulp
    .src(JS_FILES)
    .pipe(jscs());
});

// ----------------------------------------------------------------------------
// Quality
// ----------------------------------------------------------------------------
gulp.task("check", ["jscs", "eslint"]);
gulp.task("check:ci", ["jscs", "eslint"]);
gulp.task("check:all", ["jscs", "eslint"]);

// ----------------------------------------------------------------------------
// Aggregations
// ----------------------------------------------------------------------------
gulp.task("default", ["check"]);
