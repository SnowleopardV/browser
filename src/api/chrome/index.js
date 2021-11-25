import echarts from "../chart"
import { chrome } from '../../modal'
export const chromeInit = () => {
    var chartDom = document.getElementById('chrome');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: 'Chrome版本分布',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        // },
        series: [
            {
                name: 'Chrome版本',
                type: 'pie',
                radius: '50%',
                data: chrome,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    option && myChart.setOption(option);
}