"use strict";

const gulp = require("gulp-help")(require("gulp"));
const eslint = require("gulp-eslint");
const gulpStylelint = require("gulp-stylelint");

const lesscssSources = ["styles/**/*.less"];

gulp.task("default", ["help"]);

gulp.task("lint", "Runs all lint tasks", ["lint-lesscss"]);

gulp.task("lint-lesscss", "Lints all LESSCSS sources", () => {
  return gulp.src(lesscssSources)
    .pipe(gulpStylelint({
      failAfterError: true,
      reporters: [
        {formatter: "verbose", console: true}
      ]
    }));
});
