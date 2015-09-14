var gulp = require('gulp'),
	config = require('./gulp.conf'),
	jshint = require('gulp-jshint'),
	mocha = require('gulp-mocha');

gulp.task('default', ['watch', 'lint', 'test'], function () {

});

gulp.task('lint', function () {
	return gulp.src(config.jshint.all)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
	return gulp.src(config.mocha.all)
		.pipe(mocha())
		.on('error', function (err) {
			this.emit('end', err);
		});
});

gulp.task('watch', function () {
	gulp
		.watch(config.jshint.all, ['lint']);
	gulp
		.watch(config.jshint.all, ['test']);
});
