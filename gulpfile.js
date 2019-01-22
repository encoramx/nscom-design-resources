var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css');

gulp.task('default', function () {
    return gulp.src([
        'styles/variables.css',
        'styles/decoration.css',
        'styles/type.css',
        'styles/layout.css',
        'styles/images.css',
        'styles/mod-cards.css',
        'styles/debris.css'
    ])
        .pipe(concatCss('main.css'))
        .pipe(gulp.dest('css-readable'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    gulp.watch('styles/*.css', gulp.series('default'));
});
