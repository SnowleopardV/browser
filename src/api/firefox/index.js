import echarts from "../chart"
import { fireFox } from '../../modal'
export const firefoxInit = () => {
    var chartDom = document.getElementById('firefox');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: 'FireFox版本分布',
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
                name: 'FireFox版本',
                type: 'pie',
                radius: '50%',
                data: fireFox,
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