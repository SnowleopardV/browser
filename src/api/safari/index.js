import echarts from "../chart"
import { safari} from '../../modal'
export const safariInit = () => {
    var chartDom = document.getElementById('safari');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
        title: {
            text: 'Safari版本分布',
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
                name: 'Safari版本',
                type: 'pie',
                radius: '50%',
                data: safari,
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