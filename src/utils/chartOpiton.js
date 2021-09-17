/*
 * @Author: shiliangL
 * @Date: 2021-06-12 23:05:45
 * @LastEditTime: 2021-09-17 18:33:14
 * @LastEditors: Do not edit
 * @Description:
 */

export const pieOption = () => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    left: 'center',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
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
    },
  ],
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
  grid: {
    top: '10%',
    left: '0%',
    right: '12%',
    bottom: '4%',
    containLabel: true,
  },
  xAxis: [
    {
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
          fontSize: 12,
        },
      },
      axisTick: {
        show: true,
        inside: true,
        lineStyle: {
          color: '#fff',
        },
      },
    },
  ],
  yAxis: [
    {
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
          fontSize: 12,
        },
      },
    },
  ],
  series: [
    {
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
        colorStops: [
          {
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
    },
  ],
});

export const barOption = () => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    show: false,
    top: '2%',
    left: '14%',
    right: '4%',
    bottom: '12%',
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '姑苏区',
        '虎丘区',
        '吴中区',
        '相城区',
        '吴江区',
        '常熟市',
        '张家港市',
        '昆山市',
        '太仓市',
        '工业园区',
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
          fontSize: 12,
        },
      },
    },
  ],
  yAxis: [
    {
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
    },
  ],
  series: [
    {
      type: 'bar',
      data: [4016, 3230, 3790, 3570, 5470, 2860, 4530, 3710, 3180, 3260],
      barWidth: '40px',
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
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
    },
  ],
});

// 圆环进度
export const FeedbackOptions = (params) => ({
  backgroundColor: 'transparent',
  title: {
    text: `${params.number}%`,
    left: '45%',
    top: '40%',
    textAlign: 'center',
    textStyle: {
      fontSize: 20,
      fontWeight: '500',
      color: '#909dff',
      textAlign: 'center',
    },
  },
  series: [
    {
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
        colorStops: [
          {
            offset: 0,
            color: '#5a8bfa', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#831bdb',
          },
        ],
        shadowBlur: 10,
        shadowColor: 'rgba(175,143,230,.5)',
        global: false, // 缺省为 false
      },
      data: [
        {
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
    },
  ],
});

// 雷达图
export const RadarOption = (params) => ({
  backgroundColor: 'transparent',
  radar: {
    center: ['50%', '50%'],
    radius: '70%',
    name: {
      formatter(name) {
        let arr;
        arr = [`{a|${name}}`];
        return arr.join('\n');
      },
      textStyle: {
        rich: {
          // 根据文字的组设置格式
          a: {
            color: '#BCDCFF',
            fontSize: 14,
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
  series: [
    {
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
    },
  ],
});
