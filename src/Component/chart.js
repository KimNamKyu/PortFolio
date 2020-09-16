import React from 'react';
import ReactEcharts from 'echarts-for-react';

let builderJson = {
    "all": 100,
    "charts": {
        "node.js": 40,
        "Python": 50,
        "Java": 60,
        "C#": 70,
        "javascript": 80,
    }
};


class chart extends React.Component {
    getOption = () => {
        return {
            tooltip: {},
            title: [
                {
                    text: '',
                    subtext: 'total : ' + builderJson.all,
                    x: '25%',
                    textAlign: 'center'
                }
            ],
            grid: [
                {
                    top: 50,
                    width: '80%',
                    bottom: '50%',
                    left: 10,
                    containLabel: true
                }
            ],
            xAxis: [
                {
                    type: 'value',
                    max: builderJson.all,
                    splitLine: {show: false}
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    data: Object.keys(builderJson.charts),
                    axisLabel: {
                        interval: 0,
                        rotate: 30
                    },
                    splitLine: {show: false}
                }
            ],
            series: [
                {
                    type: 'bar',
                    stack: 'chart',
                    z: 3,
                    label: {
                        normal: {
                            position: 'right',
                            show: true
                        }
                    },
                    data: Object.keys(builderJson.charts).map((key) => {
                        return builderJson.charts[key];
                    })
                },
                {
                    type: 'bar',
                    stack: 'chart',
                    silent: true,
                    itemStyle: {
                        normal: {color: '#eee'}
                    },
                    data: Object.keys(builderJson.charts).map((key) => {
                        return builderJson.all - builderJson.charts[key];
                    })
                }
            ]
        }
    }

    render() {
        return (
            <ReactEcharts option={this.getOption()} style={{height: '500px', width: '100%'}} />
        );
    }
}

export default chart;