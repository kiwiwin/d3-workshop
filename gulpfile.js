var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	notify = require('gulp-notify'),
	bower = require('gulp-bower');


var config = {
	sassPath: './apps/sass',
	bowerDir: './bower_components'
};

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir));
});

gulp.task('css', function() { 
    return sass(config.sassPath + '/style.scss', {
             style: 'compressed',
             loadPath: [
                 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets'
             ]
         }) 
         .pipe(gulp.dest('./public/css')); 
});

 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

  gulp.task('default', ['bower', 'css']);