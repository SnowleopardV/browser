import echarts from "../chart"
import { edge } from '../../modal'
export const edgeInit = () => {
    var chartDom = document.getElementById('edge');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: 'Edge版本分布',
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
                name: 'Edge版本',
                type: 'pie',
                radius: '50%',
                data: edge,
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