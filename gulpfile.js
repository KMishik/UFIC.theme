"use strict"

var gulp       = require('gulp');
//var coffee		 = require('gulp-coffee');
var sass       = require('gulp-sass');
const ts	= require('gulp-typescript');
//var livereload = require('gulp-livereload');
var bSync = require('browser-sync').create();


gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.+(scss|sass)')
				.pipe(sass.sync().on('error', sass.logError))
				.pipe(gulp.dest('css/'));
});

gulp.task('typescript', () => {
			( () => gulp.src('src/tsc/*.ts')
			  	.pipe(ts())
				.pipe(gulp.dest('js/'))
			)();		
});

// gulp.task('coffee', function() {
// 	gulp.src('src/coffee/**/*.coffee')
// 			.pipe(coffee({bare: true}))
// 			.on('error', console.log)
// 			.pipe(gulp.dest('js/'));
// });

gulp.task('browsersync', function () {
	bSync.init(
		{
			proxy: "dev.ufaras.ru",
			notify: false
		});

});

gulp.task('watch', ['sass', 'typescript', 'browsersync'/*, 'coffee'*/], function() {
	/* livereload.listen();*/
	gulp.watch('src/scss/**/*.+(scss|sass)', ['sass']);
	gulp.watch('src/tsc/*.ts', ['typescript']);
//	gulp.watch('src/coffee/**/*.coffee', ['coffee']);
	gulp.watch(['css/**/*.css', 'js/**/*.js'], bSync.reload/* function (files) {
		livereload.changed(files);
	} */ );
});

gulp.task('default', ['watch']);

