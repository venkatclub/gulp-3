# gulp-3
gulp - npm, scss 

bootstrap , sass  watch with gulp ..


--

npm init 

npm install  ( if Dependencies added )

npm install gulp --save-dev

npm install gulp-sass --save-dev

npm install gulp-watch --save-dev

npm install bootstrap@4.0.0-alpha.6  --save-dev   ( change the version if needed..)



--

create / eidt gulpfile.js

and run the tasks, watch ...

gulp    -> this will run gulp task default one ..

gulp sass 

gulp sass2


gulp watch  

--

similar file like this , with more specific - 
https://github.com/venkatclub/gulp-3/blob/master/gulp-install.md

Done ! 

Great Day !




--


error handle 

.on('error', console.error.bind(console))


gulp.task('sass2', function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', console.error.bind(console)))
    .pipe(gulp.dest('./css'));
});


