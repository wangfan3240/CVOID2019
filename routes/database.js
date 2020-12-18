var express = require("express");
var router = express.Router();

// 新建一个数据库连接
const database = require('better-sqlite3')('dbname.db');

// 查询全国病例
const stmt = database.prepare('SELECT * FROM CVOID ');
var  getOverData = function() {
  return stmt.all(); 
}

// 查询各省病例
const provinceCaseStmt = database.prepare('SELECT * FROM ProvinceCase Where Name = ? ');

// 查询CPI
const CPIDataStmt = database.prepare('SELECT * FROM CPI Where Province = ? and Month = ? ');
/* GET users listing. */
router.get("/test", function (req, res, next) {
  var data = {
    code: 0,
    data: {
      name: ["aaa","b","c"],
      pwd: [123,2,3],
    },
    isSuccess: true,
    msg: "请求成功",
  };

  res.json(data);
});


router.get("/GetOverView", function (req, res, next) {
  var resault = getOverData();  
  res.json(resault);
});

router.get("/Province", function (req, res, next) {
  var data = {    
    '山东省':[117,36.65],
    '河北省':[114.48,38.03],
    '吉林省':[125.35,43.88],
    '黑龙江省':[126.63,45.75],
    '辽宁省':[123.38,41.8],
    '内蒙古自治区':[111.65,40.82],
    '新疆维吾尔自治区':[87.68,43.77],
    '甘肃省':[103.73,36.03],
    '宁夏回族自治区':[106.27,38.47],
    '山西省':[112.53,37.87],
    '陕西省':[108.95,34.27],
    '河南省':[113.65,34.76],    
    '安徽省':[117.27,31.86],
    '江苏省':[119.78,33.04],
    '浙江省':[120.19,30.26],
    '福建省':[119.3,26.08],
    '广东省':[113.23,23.16],
    '江西省':[115.89,28.68],
    '海南省':[110.35,20.02],
    '广西壮族自治区':[108.33,22.84],
    '贵州省':[106.71,26.57],
    '湖南省':[113,28.21],
    '湖北省':[114.31,30.52],
    '四川省':[104.06,30.67],
    '云南省':[102.73,25.04],
    '西藏自治区':[91.11,29.97],    
    '青海省':[101.74,36.56],
    '天津市':[117.2,39.13],
    '上海市':[121.48,31.22],
    '重庆市':[106.54,29.59],
    '北京市':[116.46,39.92],
    '台湾省':[121.56,25.04],
  };

  res.json(data);
});

router.get("/ProvinceCase", function (req, res, next) {
    var data = [
     {name: '西藏自治区', confirmedCount: 24, curedCount:0, deadCount:0, currentConfirmedCount:0}, 
     {name: '甘肃省', confirmedCount: 24, curedCount:0, deadCount:0, currentConfirmedCount:0},       
     {name: '上海市', confirmedCount: 25, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '福建省', confirmedCount: 29, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '广西壮族自治区', confirmedCount: 37, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '广东省', confirmedCount: 38, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '河北省', confirmedCount: 39, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '云南省', confirmedCount: 39, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '海南省', confirmedCount: 44, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '辽宁省', confirmedCount: 50, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '吉林省', confirmedCount: 51, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '宁夏回族自治区', confirmedCount: 52, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '江西省', confirmedCount: 54, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '青海省', confirmedCount: 57, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '内蒙古自治区', confirmedCount: 58, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '四川省', confirmedCount: 58, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '黑龙江省', confirmedCount: 61, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '重庆市', confirmedCount: 66, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '安徽省', confirmedCount: 67, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '贵州省', confirmedCount: 71, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '北京市', confirmedCount: 79, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '新疆维吾尔自治区', confirmedCount: 84, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '浙江省', confirmedCount: 84, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '山东省', confirmedCount: 92, curedCount:0, deadCount:0, currentConfirmedCount:0},     
     {name: '江苏省', confirmedCount: 99, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '天津市', confirmedCount: 105, curedCount:0, deadCount:0, currentConfirmedCount:0},    
     {name: '河南省', confirmedCount: 113, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '山西省', confirmedCount: 114, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '陕西省', confirmedCount: 147, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '湖南省', confirmedCount: 175, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '湖北省', confirmedCount: 273, curedCount:0, deadCount:0, currentConfirmedCount:0},
     {name: '台湾省', confirmedCount: 273, curedCount:0, deadCount:0, currentConfirmedCount:0},
    ];

    for(var i = 0; i < data.length; i++)
    {
      var resault = provinceCaseStmt.get(data[i].name);
      if(resault)
      {
          data[i].confirmedCount = resault.confirmedCount;
          data[i].curedCount = resault.curedCount;
          data[i].deadCount = resault.deadCount;
          data[i].currentConfirmedCount = resault.confirmedCount - resault.curedCount - resault.deadCount;
      }      
    }
  res.json(data);
});

router.post("/GetCPIData", function (req, res, next){  

  var data = {
    max:200,
    min:0,
    value: [ ]
  };
  var resault = CPIDataStmt.all(req.body.Province, req.body.Month);
  var min = 200;
  var max = 0;
  if(resault)
  {
    for(var i = 0; i< resault.length; i++)
    {
      var s=[];
      s.push(resault[i].Year);
      s.push(resault[i].Clothing);
      s.push(resault[i].Food);
      s.push(resault[i].Shelter);
      s.push(resault[i].Serve);
      s.push(100);
     
      for(var j = 1; j < s.length; j++)
      {
        if (s[j] > max)
        {
          max = s[j];
        }
        if(s[j] < min)
        {
          min = s[j];
        }
      }
      data.value.push(s);
    }
  }
  data.min = min;
  data.max = max;
  res.json(data);  
});
module.exports = router;
