var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.engine('html',swig.renderFile);
//设置模板文件存放的目录
app.set('views','./views');
app.set('view engine','html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// 这里配置前端传递过来的json数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 服务端设置跨域
app.all('*', (req, res, next) => {
     // 消除中文乱码
     res.set('Content-type', 'application/json;charset=utf-8')
     // 设置跨域代码
     res.header('Access-Control-Allow-Origin', '*')
     // 设置请求头的类型
     res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type');
     // 设置永许的的请求方式
	   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
     // 中间件next（）   请求会被挂起
     next()
          
})

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
