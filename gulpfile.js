const gulp = require('gulp'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  babel = require('gulp-babel');
gulp.task('common',()=>{
	gulp.src('./src/scss/common').pipe(concat('common.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})
gulp.task('login',()=>{
	gulp.src('./src/scss/login').pipe(concat('login.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})
gulp.task('registor',()=>{
	gulp.src('./src/scss/registor').pipe(concat('registor.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})
gulp.task('shopCard',()=>{
	gulp.src('./src/scss/shopCard').pipe(concat('shopCard.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})
gulp.task('shopMsg',()=>{
	gulp.src('./src/scss/shopMsg').pipe(concat('shopMsg.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})
gulp.task('shopList',()=>{
	gulp.src('./src/scss/shopList').pipe(concat('shopList.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})
gulp.task('page',()=>{
	gulp.src('./src/scss/page').pipe(concat('page.min.js')).pipe(uglify()).pipe(gulp.dest('./src/css'))
})