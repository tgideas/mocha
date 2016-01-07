/**
 * TGUI Workflow Automation
 * 
 * Author: sonichuang
 * LastModify: 2015-12-01
 */

/*
 * Gulp Plugins
 */
var gulp 		  = require('gulp'),
    concat    = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    connect   = require('gulp-connect');

/*
 * Setting Pathsstella
 */
var paths = {
	src	: "src/"
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
 * Task CSS Build [所有CSS合并成1个]
 */
gulp.task('build-mocha-css', function(){
  gulp.src([paths.src + "css/" + "base/" + "base_v.2.css",
             paths.src + "css/" + "audio/" + "audio_v.1.css",
             paths.src + "css/" + "box/" + "box_v.1.css",
             paths.src + "css/" + "button/" + "button_v.1.css",
             paths.src + "css/" + "comment/" + "comment_v.1.css",
             paths.src + "css/" + "countdown/" + "countdown_v.1.css",
             paths.src + "css/" + "dialog" + "dialog_v.1.css",
             paths.src + "css/" + "gift/" + "gift_v.1.css",
             paths.src + "css/" + "loading/" + "loading_v.1.css",
             paths.src + "css/" + "lottery/" + "lottery_v.1.css",
             paths.src + "css/" + "menu/" + "menu_v.1.css",
             paths.src + "css/" + "navigation/" + "navigation_v.1.css",
             paths.src + "css/" + "pic-list/" + "pic-list_v.1.css",
             paths.src + "css/" + "pictxt-list/" + "pictxt-list_v.1.css",
             paths.src + "css/" + "select/" + "select_v.1.css",
             paths.src + "css/" + "sign-in/" + "sign-in_v.1.css",
             paths.src + "css/" + "slider" + "slider_v.1.css",
             paths.src + "css/" + "tab/" + "tab_v.1.css",
             paths.src + "css/" + "table" + "table_v.1.css",
             paths.src + "css/" + "txt-list/" + "txt-list_v.1.css",
             paths.src + "css/" + "video/" + "video_v.1.css"])
    .pipe(concat('mocha.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.src + "css/"))
});



/* ---------------------------------------------------
 * 自动化组合
 */ 
gulp.task('watch',['connect','watch-file'])			        //文件更新自动 F5
