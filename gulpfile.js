const gulp = require('gulp'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  babel = require('gulp-babel'),
	  sass = require('gulp-sass'),
	  cssnano = require('gulp-cssnano');
	  
gulp.task('common',()=>{
		gulp.src('./src/scss/common.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('login',()=>{
		gulp.src('./src/scss/login.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('registor',()=>{
		gulp.src('./src/scss/registor.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('shopCard',()=>{
		gulp.src('./src/scss/shopCard.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('shopMsg',()=>{
		gulp.src('./src/scss/shopMsg.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('shopList',()=>{
		gulp.src('./src/scss/shopList.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('index',()=>{
		gulp.src('./src/scss/index.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('default',()=>{
		gulp.watch('./src/scss/*.scss',['common','login','registor','shopCard','shopMsg','shopList','index']);
})