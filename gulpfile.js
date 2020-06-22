var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

function tsCompile(cb) {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("app/js/dist"));
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
    gulp.watch("app/scss/**/*.scss", sassCompile);
    gulp.watch("app/js/*.ts", tsCompile);
}

exports.sass = sassCompile;
exports.ts = tsCompile;
exports.watch = watch;