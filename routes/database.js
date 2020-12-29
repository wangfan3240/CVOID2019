const e = require("express");
var express = require("express");
var router = express.Router();

// 新建一个数据库连接
const database = require('better-sqlite3')('dbname.db');

// 查询全国病例
const stmt = database.prepare('SELECT * FROM CVOID ');
var  getOverData = function() {
  return stmt.all(); 
}

const ProvinceDataTm = [
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
  {name: '香港', confirmedCount: 273, curedCount:0, deadCount:0, currentConfirmedCount:0},
  {name: '澳门', confirmedCount: 273, curedCount:0, deadCount:0, currentConfirmedCount:0},
 ];
// 查询各省病例
const provinceCaseStmt = database.prepare('SELECT * FROM ProvinceCase Where Province = ? and updateTime = ?');

// 查询CPI
const CPIDataStmt = database.prepare('SELECT * FROM ProvinceData Where Province = ? and Month = ? ');

// 查询各省物资供应数据
const ProvinceDataStmt = database.prepare('SELECT * FROM ProvinceData Where Province = ? and Year = ? ');

// 查询词云数据
const WordCloudDataStmt = database.prepare('SELECT * FROM WordCloud Where Date = ? ');

// 查询各省GDP
const ProvinceGDPStmt = database.prepare('SELECT * FROM ProvinceGDP Where Province = ? ');

// 查询新闻
const NewsStmt = database.prepare('SELECT * FROM News Where Date = ? ');

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

router.post("/ProvinceCase", function (req, res, next) {
        
    for(var i = 0; i < ProvinceDataTm.length; i++)
    {
      var resault;
      var date = new Date(req.body.Date);
      var month = Number(date.getMonth()) + 1;
      var day = Number(date.getDate()) + 1;
      do{
        if(day-- <= 0)
        {
          month -=1;
          if(month <= 0)
          {
            break;
          }
          else
          {
            day = 31;
            continue;
          }         
        }
        else
        {
          date = 2020 + '/' + String(month) + '/' + String(day);
          resault = provinceCaseStmt.all(ProvinceDataTm[i].name, date);
        }

      }while(resault.length == 0)

      if(resault.length)
      {
        ProvinceDataTm[i].confirmedCount = resault[0].confirmedCount;
        ProvinceDataTm[i].curedCount = resault[0].curedCount;
        ProvinceDataTm[i].deadCount = resault[0].deadCount;
        ProvinceDataTm[i].currentConfirmedCount = resault[0].CurCount;
      }
    }
  res.json(ProvinceDataTm);
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
      s.push(resault[i].衣着);
      s.push(resault[i].食品烟酒);
      s.push(resault[i].居住);
      s.push(resault[i].交通和通信);
      s.push(resault[i].医疗);
     
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
  data.min = 90;
  data.max = max;
  res.json(data);  
});

router.post("/GetProvinceData", function (req, res, next){  

  var data = {
    province:req.body.Province,
    month:[],
    ls: [ ],
    sc: [ ],
    rl: [ ],
    sg: [ ],
    sh: [ ],
    yl: [ ],
  };

  var month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  var resault18 = ProvinceDataStmt.all(req.body.Province, 2018);
  var resault19 = ProvinceDataStmt.all(req.body.Province, 2019);
  var resault20 = ProvinceDataStmt.all(req.body.Province, 2020);
  if(resault20)
  {
    var size = resault20.length;
    for(var i = 0; i< size; i++)
    {
        data.month.push(month[i]);
        data.ls.push(-Math.min(200, Math.round(Math.log10((resault20[size - 1 - i].粮食 - 100) / (resault19[size - 1 - i].粮食 - 100)) * 100)));
        data.sc.push(-Math.min(200, Math.round(Math.log10((resault20[size - 1 - i].鲜菜 - 100) / (resault19[size - 1 - i].鲜菜 - 100)) * 100)));
        data.rl.push(-Math.min(200, Math.round(Math.log10((resault20[size - 1 - i].畜肉 - 100) / (resault19[size - 1 - i].畜肉 - 100)) * 100)));
        data.sh.push(-Math.min(200, Math.round(Math.log10((resault20[size - 1 - i].生活用品 - 100) / (resault19[size - 1 - i].生活用品 - 100)) * 100)));
        data.yl.push(-Math.min(200, Math.round(Math.log10((resault20[size - 1 - i].医疗 - 100) / (resault19[size - 1 - i].医疗 - 100)) * 100)));
        data.sg.push(-Math.min(200, Math.round(Math.log10((resault20[size - 1 - i].鲜果 - 100) / (resault19[size - 1 - i].鲜果 - 100)) * 100)));
    }
  }

  res.json(data);  
});

router.post("/GetProvinceGDP", function (req, res, next){  

  var data = {
    province:req.body.Province,
    month: [],
    value: [],   
    value1: [] 
  };

  var resault20 = ProvinceGDPStmt.all(req.body.Province);
  if(resault20)
  {
    var size = resault20.length;
    var usesize = 15;
    for(var i = size-usesize; i< size; i++)
    {
        data.month.push(resault20[size - i - 1].Date);
        data.value.push(resault20[size - i - 1].Value);
        data.value1.push(resault20[size - i - 1].Value);
    }

    for(var i = 0; i < 3; i++)
    {
      data.value1[usesize - 3 + i] = data.value[usesize - 7 + i] * (data.value[usesize - 7 + i] / data.value[usesize - 11 + i]);
      data.value1[usesize - 3 + i] = data.value1[usesize - 3 + i].toFixed(2);
    }
  }

  res.json(data);  
});

router.post("/GetWordCloud", function (req, res, next){  

  var Date = req.body.Date.year + '/' + req.body.Date.month + '/' + req.body.Date.day;
  var resault = WordCloudDataStmt.all(Date); 

  res.json(resault);  
});

router.post("/GetNews", function (req, res, next){  

  var Date = req.body.Date.month + '月' + req.body.Date.day +'日';
  var resault = NewsStmt.all(Date); 

  var data = [];
  for(var i = 0; i < resault.length; i++)
  {
    var news = [];
    //news.push(resault[i].Date);
    //news.push(resault[i].title);
    news.push(resault[i].Date + ':' + resault[i].title);
    data.push(news);
  }
  res.json(data);  
});

module.exports = router;
