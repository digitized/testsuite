// gulpfile.js 
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('./config.js'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    config = require('./config.js'),
    codeFolder = 'code/';

gulp.task('run', function () {
  livereload.listen(35729);
  nodemon({
    script: 'app.js',
    watch: ['app.js', 'config.js'],
    env: {'NODE_ENV': 'development'},
  }).on('start', function(){
    gulp.src(codeFolder+config.testPage).pipe(livereload())
  });
  gulp.watch(codeFolder+config.folder+'**/*.*', ['reload']);

});

gulp.task('reload', function(){
  gulp.src(codeFolder+config.testPage).pipe(livereload());
});