'use strict';

var gulp 			= require('gulp'),
	notify 			= require('gulp-notify'),
	sass 			= require('gulp-sass'),
	sourcemaps      = require('gulp-sourcemaps'),
	postcss 		= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer');

gulp.task('styles', function(){
	gulp.src('*.scss')
		.pipe( sourcemaps.init() )
		.pipe( sass().on('error', function(err) {
				return notify().write(err);
			})
		)
		.pipe( postcss([autoprefixer({browsers: ['last 1 version']})]) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest('') )
		.pipe( notify("Styles compiled!") );
});

/* Whatch and default */

gulp.task('watch', function () {
	gulp.watch('*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
