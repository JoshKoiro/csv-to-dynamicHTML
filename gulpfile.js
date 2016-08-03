var gulp = require('gulp');
const csv2json = require('gulp-csv2json');
const rename = require('gulp-rename');
const insert = require('gulp-insert');

gulp.task('default',function(){

  var csvParse = {};
  gulp.src('source-csv/*.csv')
  .pipe(csv2json(csvParse))
  .pipe(rename('data.js'))
  .pipe(insert.prepend('module.exports.data = function(){return '))
  .pipe(insert.append(';};'))
  .pipe(gulp.dest('source-js'));

});
