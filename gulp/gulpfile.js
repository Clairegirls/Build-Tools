/**
 * Created by Administrator on 2016/11/9.
 */
var gulp=require('gulp');
//1、引入编译sass的插件
var sass=require('gulp-sass');
//2、用gulp-uglify压缩JS,引入/gulp-uglify
var uglify=require('gulp-uglify');
//3、用gulp-minify-css压缩css
var minifyCSS=require('gulp-minify-css');
//4、1用gulp-imagemin压缩图片并配合gulp-cache
var imagemin=require('gulp-imagemin');
//4、3用gulp-cache配合gulp-imagemin压缩图片是为了避免压缩重复图片
var cache=require('gulp-cache');
//5、Browser Sync 帮助我们搭建简单的本地服务器并能实时刷新浏览器，它还能 同时刷新多个设备
var browserSync=require('browser-sync');

//1-2、告知编译哪里的文件输出到哪里,
//可以命令单个执行：gulp sass，只编译sass
gulp.task('sass',function(){
    gulp.src('app/scss/*.scss')//被编译的文件路径
        .pipe(sass())
        .pipe(gulp.dest('app/css'))//编译后自动保存的路径
        //5、2我们稍微修改一下之前的代码，让每次css文件更改都刷新一下浏览器
        .pipe(browserSync.reload({
            stream:true
        }))
});
//2、1告知执行压缩任务:可以命令单个执行  gulp uglify压缩JS，
// //可以添加默认任务，执行：gulp等于执行gulp default
gulp.task('uglify',function(){
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
//3、1告知执行压缩css
gulp.task('minifyCSS',function(){
    gulp.src('app/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});
//4、2告知压缩图片
gulp.task('images',function(){
    gulp.src('app/images/*.+(jpg|png|gif|svg|GIF)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
//4、4告知执行压缩图片非重复，此时的cache任务包含上面的images任务
gulp.task('cache',function(){
    gulp.src('app/images/*.+(png|jpg|gif|svg|GIF)')
        .pipe(cache(imagemin({
            interlaced:true
        })))
        .pipe(gulp.dest('dist/images'))
});
//5、1我们创建一个broswerSync任务，我们需要告知它，根目录在哪里。
gulp.task('browserSync',function(){
    browserSync({
        server:{
            baseDir:'app'
        }
    })
});
//6、监听sass文件的变化,此时只要scss下的文件变化会自动编译到上一步指定的文件下
gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('app/scss/*.scss',['sass']);//此时命令行执行：gulp watch,会自动打开http://localhost:3000/浏览器，文件变动自动编译刷新
    //3、3不止是scss修改的时候需要刷新浏览器吧？再改改：
    //gulp.watch('src/*.html',browserSync.reload);
    //gulp.watch('src/js/*.js',browserSync.reload);
});