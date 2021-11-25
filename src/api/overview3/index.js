import echarts from "../chart"
import { overview3 } from '../../modal'
export const overViewInit3 = () => {
    var chartDom = document.getElementById('overview3');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: '需要升级的浏览器分布',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'top',
        //     left: 'left',
        // },
        series: [
            {
                name: '浏览器分布',
                type: 'pie',
                radius: '50%',
                data: overview3,
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