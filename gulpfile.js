var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var gulpFilter = require('gulp-filter');
let uglify = require('gulp-uglifyes');

var mainBowerFiles = require('main-bower-files');

// Build all of the required files
gulp.task("build", ["js", "css", "images"], () => {});

// Builds css
gulp.task('css', function() {
    return gulp.src("static/css/*.css")
        .pipe(concat("style.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("build/css"));
});

// Right now only does the favicon
gulp.task('images', function() {
    return gulp.src("static/images/*")
        .pipe(gulp.dest("build/images"));
})

// Gulp task concatenates all js from bower components and from the app
gulp.task('js', function() {
    var files = mainBowerFiles();

    files.push('static/js/**/*.js');

    return gulp.src(files)
        .pipe(gulpFilter("**/*.js"))
        .pipe(concat("script.js"))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});