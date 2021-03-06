var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync");

// Сервер
gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
        baseDir: ''
    }
    });   
});

// Sass компиляция
gulp.task('sass',function(){
    return gulp.src(['sass/**/*.sass','sass/**/*.scss'])
    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
    .pipe(gulp.dest('css'))
});

// Слежка
gulp.task('watch', function () {
    gulp.watch([
        '*.html',
        'sass/**/*.scss',
        'css/*.css',
        'js/**/*.js'
    ],['sass']).on('change', browserSync.reload);
});


// Запуск по умолчанию
gulp.task('default', ['server', 'sass', 'watch']);