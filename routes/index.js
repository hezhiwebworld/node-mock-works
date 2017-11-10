var express = require('express');
var router = express.Router();

/* 
*   login/getRequestTokenNo.htm 
*   获取登录的令牌
*/
router.post('/login/getRequestTokenNo.htm', function(req, res, next) {
  // 输出请求体的内容
  console.log(req.body)
  // 这里面的数据格式
  let result =  {
    deviceId: '06:01:02:31:84:a4',
    outToken: 'b151fe73ebbb4dbcbf33f7126d532452e2fe3ef5',
    uhId: 'vjtstkunosi82f0fcab8751fd7b4138f',
    dhId: '6e24110e4ee24d74ad97f333cca07ce0',
    imei: '863696034240144',
    bindCardSource: 'any',
    requestTokenNo : "2290298f2893b1adc1d298093ac907ec6e24110e4ee24d74ad97f333cca07ce0",
  }
  res.end(JSON.stringify(result));
});

module.exports = router;
