var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');


var path = {
	app: './src/jsx/app.jsx'
};


gulp.task('browserify', function(){
	browserify(path.app)
		.transform('babelify', {
			presets: ['es2015', 'react']
		})
		.bundle()
		.on('error', function(err){
			console.log('Error : ' + err.message);
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/js'));
});


gulp.task('webserver', function(){
	gulp.src('./')
		.pipe(webserver({
			directoryListing: true
		}));
});


gulp.task('default', ['webserver'], function(){
	gulp.watch(path.app, ['browserify']);
});