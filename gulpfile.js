var gulp = require('gulp');
var inject = require('gulp-inject')

gulp.task('default', defaultTask);

function defaultTask(done) {

    gulp.src(['./src/pages/*.html', './src/index.html'])
        .pipe(inject(gulp.src(['./src/partials/**/*.html']), {
            starttag: '<!-- inject:{{path}} -->',
            relative: true,
            transform: function (filePath, file) {
                // return file contents as string
                console.log(filePath)
                return file.contents.toString('utf8')
            }
        }))
        .pipe(gulp.dest('./dest'));

    done();
}