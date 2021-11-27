/*
 * @Author: shiliangL
 * @Date: 2021-06-12 23:05:45
 * @LastEditTime: 2021-11-27 00:59:36
 * @LastEditors: Do not edit
 * @Description:
 */
import { px2rem } from '@/utils/rem';

export const pieOption = () => ({
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        left: 'center',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
        itemWidth: px2rem(25),
        itemHeight: px2rem(14),
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: px2rem(12),
        },
    },
    series: [{
        name: 'Traffic Sources',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 1,
        },
        label: {
            show: false,
            position: 'center',
        },
        labelLine: {
            show: false,
        },
        data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines' },
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
    }],
});

export const lineOption = () => ({
    backgroundColor: 'transparent',
    tooltip: {
        formatter: '{a}: <br/>{b} : {c}%',
        axisPointer: {
            lineStyle: {
                color: '#029aab',
            },
        },
        trigger: 'axis',
        backgroundColor: 'rgba(9,38,106,0.5)',
        borderWidth: 1,
        borderColor: '#00F5FF',
    },
    // legend: {
    //   left: 'center',
    //   textStyle: {
    //     color: 'rgba(255, 255, 255, 0.5)',
    //     fontSize: px2rem(12),
    //   },
    // },
    grid: {
        top: '10%',
        left: '0%',
        right: '12%',
        bottom: '4%',
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.28)',
            },
        },
        boundaryGap: false,
        data: [8.1, 8.3, 8.4, 8.5, 8.6, 8.7],
        axisLabel: {
            textStyle: {
                color: '#FFFFFF',
                fontSize: px2rem(12),
            },
        },
        axisTick: {
            show: true,
            inside: true,
            lineStyle: {
                color: '#fff',
            },
        },
    }],
    yAxis: [{
        type: 'value',
        max: 100,
        interval: 25,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: '{value} %',
            show: true,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: px2rem(12),
            },
        },
    }],
    series: [{
        name: '在线趋势',
        type: 'line',
        smooth: true,
        showSymbol: true,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(55, 242, 255, 0.5)', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(55, 242, 255, 0)', // 100% 处的颜色
                },
            ],
            global: false, // 缺省为 false
        },
        lineStyle: {
            color: 'rgb(55, 242, 255)',
        },
        itemStyle: {
            borderColor: 'rgb(55, 242, 255)',
            borderWidth: 3,
        },
        label: {
            show: true,
            distance: 10,
            color: '#bae0fd',
            formatter: '{c} %',
        },
        areaStyle: {},
        data: [56, 66, 55, 83, 22, 32, 92],
    }],
});

export const barOption = () => ({
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        left: 'center',
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: px2rem(12),
        },
    },
    grid: {
        show: false,
        top: '2%',
        left: '14%',
        right: '4%',
        bottom: '12%',
    },
    xAxis: [{
        type: 'category',
        data: [
            '南山区',
            '罗湖区',
            '宝安区',
            '南山区',
            '龙岗区',
            '光明区',
            '盐田区',
            '龙华区',
            '福田区',
            '坪山区',
        ],
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
            },
        },
        axisLabel: {
            margin: 2,
            color: '#e2e9ff',
            textStyle: {
                fontSize: '90%',
            },
        },
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
            },
        },
    }],
    series: [{
        type: 'bar',
        data: [4016, 3230, 3790, 3570, 5470, 2860, 4530, 3710, 3180, 3260],
        barWidth: '40px',
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(55, 242, 255, 0.5)', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(55, 242, 255, 0)', // 100% 处的颜色
                },
            ],
            global: false, // 缺省为 false
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: 'rgba(0,160,221,0.1)',
                borderRadius: 200,
                position: ['-10', '-24'],
                distance: 1,
                // eslint-disable-next-line no-useless-concat
                formatter: '{d|●}' + '{c} ',
                rich: {
                    d: {
                        color: '#3CDDCF',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                },
            },
        },
    }],
});

// 圆环进度
export const FeedbackOptions = (params) => ({
    backgroundColor: 'transparent',
    title: {
        text: `${params.number}%`,
        left: 'middle',
        top: 'middle',
        textAlign: 'center',
        textStyle: {
            fontSize: px2rem(20),
            fontWeight: '500',
            color: '#909dff',
            textAlign: 'center',
        },
    },
    // legend: {
    //   left: 'center',
    //   textStyle: {
    //     color: params.color || 'rgba(255, 255, 255, 0.5)',
    //     fontSize: px2rem(12),
    //   },
    // },
    series: [{
        type: 'pie',
        startAngle: 0,
        radius: ['80%', '70%'],
        center: ['50%', '50%'],
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0,
                    color: '#5acef2',
                },
                {
                    offset: 0.7,
                    color: '#5073fb',
                },
                {
                    offset: 1,
                    color: '#6ae8d8',
                },
            ],
            shadowBlur: 10,
            shadowColor: 'rgba(175,143,230,.5)',
            global: false, // 缺省为 false
        },
        data: [{
                value: params.number,
                name: params.title,
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0,
                        },
                    },
                },
                hoverAnimation: false,
            },
            {
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0,
                        },
                    },
                },
                value: 100 - params.number,
                hoverAnimation: true,
                itemStyle: {
                    color: 'rgba(79,76,192, 0.3)',
                },
            },
        ],
    }],
});

// 雷达图
export const RadarOption = (params) => ({
    backgroundColor: 'transparent',
    radar: {
        center: ['50%', '50%'],
        radius: '70%',
        name: {
            formatter(name) {
                const arr = [`{a|${name}}`];
                return arr.join('\n');
            },
            textStyle: {
                rich: {
                    // 根据文字的组设置格式
                    a: {
                        color: '#BCDCFF',
                        fontSize: '90%',
                        fontWeight: 600,
                        fontFamily: 'Source Han Sans CN',
                    },
                },
            },
        },
        // 名字和图形的距离
        nameGap: 5,
        indicator: params.indicator,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(84,136,255, 0.05)',
                    'rgba(84,136,255, 0.1)',
                    'rgba(84,136,255, 0.4)',
                    'rgba(84,136,255, 0.5)',
                    'rgba(84,136,255, 0.6)',
                    'rgba(84,136,255, 0.7)',
                ].reverse(),
                shadowColor: 'rgba(0, 0, 0, .5)',
                shadowBlur: 5,
                shadowOffsetX: 10,
                shadowOffsetY: 10,
            },
        },
    },
    series: [{
        name: '用户浏览类别',
        type: 'radar',
        data: [params.data],
        label: {
            show: false,
            formatter(param) {
                return `${param.value}万`;
            },
            color: '#9ae8ac',
            distance: 10,
            align: 'right',
        },
        symbol: 'none',
        symbolSize: [6, 6],
        // 边缘颜色
        lineStyle: {
            color: 'rgba(160,159,246, 0.6)',
            width: 2,
        },
        areaStyle: {
            color: 'rgba(114,113,233,.4)',
            opacity: 0.8,
            shadowColor: 'rgba(115,149,255,1)',
            shadowBlur: 10,
        },
    }],
});

export const LineAssignmentLv = (params) => ({
    backgroundColor: 'transparent',
    title: {
        show: false,
    },
    legend: {
        show: true,
        top: '5%',
        textStyle: {
            color: '#c0c9d2',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '10%',
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
        },
        splitArea: {
            color: '#f00',
            lineStyle: {
                color: '#f00',
            },
        },
        axisLabel: {
            color: '#BCDCF0',
        },
        splitLine: {
            show: false,
        },
        boundaryGap: false,
        data: params.timeList,
    },

    yAxis: {
        type: 'value',
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#d1e6eb',
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
            name: '出口流量',
            type: 'line',
            smooth: true, // 是否平滑
            lineStyle: {
                normal: {
                    color: '#00b3f4',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                },
            },
            // 去除点标记
            symbolSize: 0,
            // 鼠标放上去还是要有颜色的
            itemStyle: {
                color: '#00b3f4',
            },
            // 渐变颜色
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(0,179,244,0.3)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,179,244,0)',
                    },
                ],
                shadowColor: 'rgba(0,179,244, 0.9)',
                shadowBlur: 20,
            },
            data: params.outData,
        },
        {
            name: '入口流量',
            type: 'line',
            smooth: true, // 是否平滑
            // 阴影
            lineStyle: {
                normal: {
                    color: '#00ca95',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                },
            },
            // 去除点标记
            symbolSize: 0,
            itemStyle: {
                color: '#00ca95',
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(0,202,149,0.3)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,202,149,0)',
                    },
                ],
                shadowColor: 'rgba(0,179,244, 0.9)',
                shadowBlur: 20,
            },
            data: params.inData,
        },
    ],
});

export const OfflinePortalOptions = (params) => ({
    backgroundColor: 'transparent',
    color: ['#73A0FA', '#73DEB3', '#32C5E9', '#67E0E3'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    grid: {
        left: '15',
        right: '15',
        bottom: '0',
        top: '30',
        containLabel: true,
    },
    legend: {
        data: ['门店1', '门店2', '门店3', '门店4'],
        show: true,
        textStyle: {
            color: '#BCDCFF',
        },
    },
    xAxis: [{
            type: 'category',
            data: params.xData,
            axisLabel: {
                color: '#BCDCF0',
                textStyle: {
                    fontSize: '90%',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            boundaryGap: true,
        },
        {
            type: 'category',
            axisLabel: {
                color: '#BCDCF0',
                textStyle: {
                    fontSize: '90%',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            boundaryGap: true,
        },
    ],
    yAxis: [{
            type: 'value',
            name: '单位/人',
            nameTextStyle: {
                color: '#BCDCFF',
            },
            axisLabel: {
                color: '#BCDCF0',
                textStyle: {
                    fontSize: '90%',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#252938',
                },
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: true,
            },
        },
        {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            name: '密度',
            // 网格样式
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#94b5ca',
                },
            },
        },
    ],
    series: [{
            name: '门店1',
            type: 'line',
            data: params.data1,
        },
        {
            name: '门店2',
            type: 'line',
            data: params.data2,
        },
        {
            name: '门店3',
            type: 'line',
            data: params.data3,
        },
        {
            name: '门店4',
            type: 'line',
            data: params.data4,
        },
        {
            name: '额度',
            type: 'bar',
            data: params.barData,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(55, 242, 255, 0.5)', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: 'rgba(55, 242, 255, 0)', // 100% 处的颜色
                    },
                ],
                global: false, // 缺省为 false
            },
            barMaxWidth: 15,
        },
    ],
});

export const userOptions = (params = {}) => ({
    header: params.header,
    data: params.data,
});

const value = 0.85;
export const liquidFill = () => ({
    backgroundColor: 'transparent',
    title: [{
        text: `${(value * 100).toFixed(0)}%`,
        left: '50%',
        top: '40%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '400',
            color: '#8b8d90',
            textAlign: 'center',
            textBorderColor: 'rgba(0, 0, 0, 0)',
            textShadowColor: '#000',
            textShadowBlur: '0',
            textShadowOffsetX: 0,
            textShadowOffsetY: 1,
        },
    }],
    polar: {
        radius: ['43%', '40%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        clockwise: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
            type: 'liquidFill',
            radius: '40%',
            z: 1,
            center: ['50%', '50%'],
            amplitude: 20,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: '#324791',
                    },
                    {
                        offset: 1,
                        color: '#449090',
                    },
                ],
                globalCoord: false,
            },
            data: [
                value,
                {
                    value,
                    direction: 'left',
                },
            ],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
                normal: {
                    formatter: '',
                },
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
        },
        {
            name: '',
            type: 'bar',
            roundCap: true,
            z: 2,
            showBackground: true,
            backgroundStyle: {
                color: '#15181e',
            },
            data: [value * 100],
            coordinateSystem: 'polar',
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: '#5acef2',
                    },
                    {
                        offset: 0.7,
                        color: '#5073fb',
                    },
                    {
                        offset: 1,
                        color: '#6ae8d8',
                    },
                ],
                shadowBlur: 10,
                shadowColor: 'rgba(175,143,230,.5)',
                global: false, // 缺省为 false
            },
        },
    ],
});
