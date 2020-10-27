var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

function babelCompile(cb) {
    return gulp.src("app/js/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("app/js/dist"));
    cb();
}

function sassCompile(cb) {
    return gulp.src("app/scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/css"));
    cb();
}

function watch() {
    sassCompile()
    babelCompile()
    gulp.watch("app/scss/**/*.scss", sassCompile);
    gulp.watch("app/js/*.js", babelCompile);
}

exports.sass = sassCompile;
exports.babel = babelCompile;
exports.watch = watch;