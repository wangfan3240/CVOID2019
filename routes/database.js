var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/test", function (req, res, next) {
  var data = {
    code: 0,
    data: {
      name: "aaa",
      pwd: "123",
    },
    isSuccess: true,
    msg: "请求成功",
  };

  res.json(data);
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

router.get("/Case", function (req, res, next) {
    var data = [
     {name: '西藏自治区', value: 24}, 
     {name: '甘肃省', value: 24},       
     {name: '上海市', value: 25},    
     {name: '福建省', value: 29},
     {name: '广西壮族自治区', value: 37},     
     {name: '广东省', value: 38},    
     {name: '河北省', value: 39},     
     {name: '云南省', value: 39},     
     {name: '海南省', value: 44},     
     {name: '辽宁省', value: 50},    
     {name: '吉林省', value: 51},    
     {name: '宁夏回族自治区', value: 52},     
     {name: '江西省', value: 54},     
     {name: '青海省', value: 57},    
     {name: '内蒙古自治区', value: 58},
     {name: '四川省', value: 58},     
     {name: '黑龙江省', value: 61},     
     {name: '重庆市', value: 66},    
     {name: '安徽省', value: 67},    
     {name: '贵州省', value: 71},    
     {name: '北京市', value: 79},    
     {name: '新疆维吾尔自治区', value: 84},     
     {name: '浙江省', value: 84},    
     {name: '山东省', value: 92},     
     {name: '江苏省', value: 99},    
     {name: '天津市', value: 105},    
     {name: '河南省', value: 113},
     {name: '山西省', value: 114},
     {name: '陕西省', value: 147},
     {name: '湖南省', value: 175},
     {name: '湖北省', value: 273},
     {name: '台湾省', value: 273},
    ];

  res.json(data);
});
module.exports = router;
