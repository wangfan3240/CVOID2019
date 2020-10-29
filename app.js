
// 加载依赖项
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sqlite3 = require('better-sqlite3');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建实例
var app = express();

// Test
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/Economy', function(req, res) {
  res.sendFile(__dirname + "/views/" + "Economy.html" )
});

// 定义模板引擎和模板文件位置
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 定义日志和输出级别
app.use(logger('dev'));

// 定义数据解析器
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 定义cookie解析器
app.use(cookieParser());

// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 匹配路径和路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // 开发环境
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 生产环境
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
