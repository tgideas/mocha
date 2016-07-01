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
    uglify    = require('gulp-uglify'),
    replace   = require('gulp-replace'),
    del       = require('del'),
    connect   = require('gulp-connect'),
    convertEncoding = require('gulp-convert-encoding');

/*
 * Setting Pathsstella
 */
var paths = {
  src  : "src/",
	web	: "website/"
};

/* ---------------------------------------------------
 * Task Gulp Connect [搭建一个localhost:8080 的服务器]
 * https://github.com/avevlad/gulp-connect
 */
gulp.task('connect', function() {
  return new Promise(function (resolve, reject) {
    connect.server({
      // root: paths.gameName + paths.act,
      root: paths.src,
      livereload: true
    });
  });
});
gulp.task('reload-html', function () {
  return gulp.src([paths.src+'**/*.htm',paths.src+'**/*.html'])
    .pipe(connect.reload());
});

/* ---------------------------------------------------
 * Task Watch [HTML/CSS 变更自动主让页面刷新]
 * https://github.com/floatdrop/gulp-watch
 */
gulp.task('watch-file', function () {
    // return gulp.watch(paths.currentAct+'css/**/*.css', gulp.parallel('reload-html'));
    return gulp.watch([paths.src+'**/*.html',paths.src+'**/*.htm', paths.src+'**/*.css'], gulp.parallel('reload-html'));
});


/* ---------------------------------------------------
 * Task CSS Build [所有CSS合并成1个]
 */
gulp.task('build-mocha-css', function(){
  return gulp.src([paths.src + "css/" + "base/" + "base_v.3.css",
           paths.src + "css/" + "text/" + "text_v.1.css",
           paths.src + "css/" + "audio/" + "audio_v.1.css",
           paths.src + "css/" + "box/" + "box_v.1.css",
           paths.src + "css/" + "button/" + "button_v.1.css",
           paths.src + "css/" + "comment/" + "comment_v.1.css",
           paths.src + "css/" + "countdown/" + "countdown_v.1.css",
           paths.src + "css/" + "dialog/" + "dialog_v.1.css",
           paths.src + "css/" + "data-user/" + "data-user_v.1.css",
           paths.src + "css/" + "gift/" + "gift_v.1.css",
           paths.src + "css/" + "layout/" + "layout_v.1.css",
           paths.src + "css/" + "loading/" + "loading_v.1.css",
           paths.src + "css/" + "lottery/" + "lottery_v.1.css",
           paths.src + "css/" + "menu/" + "menu_v.1.css",
           paths.src + "css/" + "navigation/" + "navigation_v.1.css",
           paths.src + "css/" + "progress/" + "progress_v.1.css",
           paths.src + "css/" + "pic-list/" + "pic-list_v.1.css",
           paths.src + "css/" + "pictxt-list/" + "pictxt-list_v.1.css",
           paths.src + "css/" + "select/" + "select_v.1.css",
           paths.src + "css/" + "sign-in/" + "sign-in_v.1.css",
           paths.src + "css/" + "slider/" + "slider_v.1.css",
           paths.src + "css/" + "search-bar/" + "search-bar_v.1.css",
           paths.src + "css/" + "title/" + "title_v.1.css",
           paths.src + "css/" + "tab/" + "tab_v.1.css",
           paths.src + "css/" + "table/" + "table_v.1.css",
           paths.src + "css/" + "txt-list/" + "txt-list_v.1.css",
           paths.src + "css/" + "video/" + "video_v.1.css",
           paths.src + "css/" + "first-screen/" + "first-screen_v.1.css",
           paths.src + "css/" + "fill-info/" + "fill-info_v.1.css",
           paths.src + "css/" + "common-foot/" + "common-foot_v.1.css"])
    .pipe(concat('mocha-1.1.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.src + "css/"));
});

gulp.task('build-ingame-css', function(){
  return gulp.src([paths.src + "css/" + "ingame/" + "ingame_v.1.css"])
    .pipe(concat('mocha-ingame.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.src + "css/"));
});

/* ---------------------------------------------------
 * Task JS Build [所有js合并成1个]
 */
gulp.task('build-mocha-js', function(){
  return gulp.src([paths.src + "js/" + "mocha.js"])
    .pipe(concat('mocha.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.src + "js/"))
});

/* ---------------------------------------------------
 * Task demo Build [向/demo目录输出相关文件]
 */
gulp.task('build-mocha-demo', function(){
   return gulp.src([paths.src+'examples/**/*.html', paths.src+'examples/**/*.htm'])
      // css地址替换
      .pipe(replace('<!-- debug css Star -->', '<!-- debug css Star '))
      .pipe(replace('<!-- debug css End -->', ' debug css End -->'))
      .pipe(replace('<!-- online css Star','<!-- online css Star -->'))
      .pipe(replace('online css End -->','<!-- online css End -->'))

      // UTF-8 to GBK
      // .pipe(replace('charset="utf-8"', 'charset="gbk"')) 
      // .pipe(convertEncoding({to: 'GBK'}))
      
      .pipe(gulp.dest('demo/'))
      console.log('Build demo/**/*.html OK！')
})
/* ---------------------------------------------------
 * Task website Build [向/ 目录输出mocha网页文件]
 */
gulp.task('build-mocha-website', function(){
  return gulp.src([paths.web+'**/*'])
    .pipe(gulp.dest('/'))
})

/* ---------------------------------------------------
 * Task build docs files [向/docs目录输出相关文件]
 */
gulp.task('build-mocha-docs', function(){
    return gulp.src(['doc/public/**/*'])
      .pipe(gulp.dest('docs/'))
})


/* ---------------------------------------------------
 * 自动化组合
 */ 
gulp.task('watch',gulp.parallel('connect','watch-file'));		           //文件更新自动 F5
gulp.task('demo',gulp.parallel('build-mocha-css','build-ingame-css','build-mocha-js','build-mocha-demo'));
gulp.task('docs',gulp.parallel('build-mocha-docs'));
gulp.task('web',gulp.parallel('build-mocha-website'));



