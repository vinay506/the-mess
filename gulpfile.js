var gulp = require('gulp');
var connect = require('gulp-connect');
var es = require('event-stream');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var es = require('event-stream');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

var jsonMerge = require('gulp-merge-json');
var jsonMinify = require('gulp-jsonminify');
var server = require('gulp-express');

var config = require('./gulpConfig.js');

gulp.task('APP_JS', function() {
    console.log("loading app_js files")
    var getTemplateStream = function() {
        return gulp.src(config.APP_TPL)
            .pipe(templateCache({
                root: 'app/',
                module: 'app'
            }))
    };
    return es.merge(gulp.src(config.APP_JS), getTemplateStream())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(config.DESTINATIONS.js))
})

gulp.task('VENDOR_JS', function() {
    console.log("loading vendor_js files")
    gulp.src(config.VENDOR_JS)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(config.DESTINATIONS.js));
})

gulp.task('connect', function() {
    connect.server({
        port: 8888
    });
});

gulp.task('server', ['server_js'], function() {
    console.log("loading server_js files")
    server.run(['./dist/serverJs/server.min.js']);
});
gulp.task('server_js', function() {
    return gulp.src(config.Server_JS)
        .pipe(concat('server.min.js'))
        .pipe(gulp.dest(config.DESTINATIONS.serverJs));
});


gulp.task('vendor_css', function() {
    return gulp.src(config.VENDOR_CSS)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(config.DESTINATIONS.css));
});
gulp.task('app_css', function() {
    return gulp.src(config.APP_CSS)
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(config.DESTINATIONS.css));
});

gulp.task('imagemin', function() {
    gulp.src(config.APP_IMAGES)
        .pipe(changed(config.DESTINATIONS.image))
        .pipe(imagemin())
        .pipe(gulp.dest(config.DESTINATIONS.image));
});

gulp.task('minify-json', function() {
    return gulp.src(config.APP_JSON)
        .pipe(jsonMerge('coreConfig.json'))
        .pipe(jsonMinify())
        .pipe(gulp.dest(config.DESTINATIONS.json))
});

gulp.task('build', ['VENDOR_JS', 'vendor_css', 'imagemin'], function() {
    console.log("vendor files")
});

gulp.task('watch', function() {
    gulp.watch(config.APP_JS, ['APP_JS']);
    gulp.watch(config.APP_CSS, ['app_css']);

});

gulp.task('default', ['APP_JS', 'app_css', 'minify-json', 'watch', 'connect', 'server'], function() {
    console.log("successfully done ...");
})