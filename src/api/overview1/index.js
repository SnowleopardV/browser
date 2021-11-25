import echarts from "../chart"
import { overview1 } from '../../modal'
export const overViewInit1 = () => {
    var chartDom = document.getElementById('overview1');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: '浏览器分布',
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
                name: '浏览器',
                type: 'pie',
                radius: '50%',
                data: overview1,
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