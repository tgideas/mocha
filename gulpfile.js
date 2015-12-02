/**
 * TGUI Workflow Automation
 * 
 * Author: sonichuang
 * LastModify: 2015-12-01
 */

/*
 * Gulp Plugins
 */
var gulp 		 = require('gulp'),
	connect      = require('gulp-connect');

/*
 * Setting Pathsstella
 */
var paths = {
	src		: 	"src/"
};

/* ---------------------------------------------------
 * Task Gulp Connect [搭建一个localhost:8080 的服务器]
 * https://github.com/avevlad/gulp-connect
 */
gulp.task('connect', function() {
  connect.server({
    // root: paths.gameName + paths.act,
    root: paths.src,
    livereload: true
  });
});
gulp.task('reload-html', function () {
  gulp.src([paths.src+'**/*.htm',paths.src+'**/*.html'])
    .pipe(connect.reload());
});

/* ---------------------------------------------------
 * Task Watch [CSS/JS 变更自动主让页面刷新]
 * https://github.com/floatdrop/gulp-watch
 */
gulp.task('watch-file', function () {
    gulp.watch(paths.src+'css/**/*.css', ['reload-html']);
    gulp.watch([paths.src+'**/*.html',paths.src+'**/*.htm'], ['reload-html']);
    // gulp.watch(paths.currentAct+'js/**/*.js', ['minify-css','reload-html']);
});


/* ---------------------------------------------------
 * 自动化组合
 */ 
gulp.task('watch',['connect','watch-file'])			        //文件更新自动 F5
