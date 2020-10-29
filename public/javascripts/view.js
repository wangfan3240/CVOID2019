import echarts from 'echarts'

$(function(){
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例',
            textStyle: {
               fontSize: 30,
               color:"#fff"
            },
        },
        tooltip: {},
        legend: {
            data:['销量'],
            textStyle:
            {
               color: "0xfff",
            } 
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            axisLine: { 
               lineStyle:
               {
                   color: "0xfff",
               } 
           }
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

