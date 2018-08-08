var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect')


var paths = {
    js: ['app/static/scripts/**/*.js']
};
//创建一个名为js的任务
gulp.task('js', function(){
    // 首先取得app/static/scripts下的所有为.js的文件（**/的意思是包含所有子文件夹)
    return gulp.src('app/static/scripts/**/*.js')
        //将ES6代码转译为可执行的JS代码
        .pipe(babel())
        //js压缩
        .pipe(uglify())
        //将转译压缩后的文件输出到dist/static/scripts下（假如没有dist目录则自动生成dist目录）
        .pipe(gulp.dest('dist/static/scripts'))
        .pipe(connect.reload())
})
gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true,
        port: 8999
    });
});
gulp.task('watch', function() {
    gulp.watch(paths.js, ['js'])
});
//创建一个名为default的任务（上面的任务都可以没有，但是这个任务必须有，不然在终端执行gulp命令会报错）
//在终端上输入gulp命令，会默认执行default任务，并执行js任务
gulp.task('default', ['js','connect','watch'])