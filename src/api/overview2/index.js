import echarts from "../chart"
import { overview2 } from '../../modal'
export const overViewInit2 = () => {
    var chartDom = document.getElementById('overview2');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: '需要升级浏览器的占比',
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
                data: overview2,
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