const gulp = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()
const stylus = require('gulp-stylus')

const files = {
  img: './src/assets/img/**/*',
  js: './src/assets/js/app.js',
  css: './src/assets/styl/style.styl',
  html: './src/**/*.html',
}
 
gulp.task('js', () =>
  gulp.src(files.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
)

gulp.task('css', () =>
  gulp.src(files.css)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
)

gulp.task('img', () =>
  gulp.src(files.img)
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.stream())
)

gulp.task('html', () =>
  gulp.src(files.html)
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
)

gulp.task('watch', ['img', 'js', 'css', 'html'], () => {
  gulp.watch(files.js, ['js'])
  gulp.watch(files.css, ['css'])
  gulp.watch(files.img, ['img'])
  gulp.watch(files.html, ['html'])
})

gulp.task('server', ['watch'], () =>
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    open: false,
  })
)