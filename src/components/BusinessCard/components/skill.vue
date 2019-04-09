<template>
  <div class="skill">
    <div class="skll-container">
      <i-spin fix v-if="spinShow"></i-spin>
      <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
    </div>
  </div>
</template>

<script>
const options = {
  // backgroundColor: 'rgba(20, 24, 69, 0.5)',
  backgroundColor: 'rgba(238, 238, 238, 0.4)',
  title: {
    text: '前端技能图谱',
    textAlign: 'center',
    left: '50%',
    top: '7%',
    textStyle: {
      fontWeight: 'bold'
    }
  },
  radar: {
    center: ['50%', '55%'],
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#2c3e50',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: 'Javascript', max: 100 },
      { name: 'H5C3', max: 100 },
      { name: 'Vue', max: 100 },
      { name: 'Yarn', max: 100 },
      { name: 'TypeScript', max: 100 },
      { name: 'Node', max: 100 },
      { name: 'Git', max: 100 },
      { name: '微信开发', max: 100 }
    ]
  },
  axisLine: {
    lineStyle: {
      color: '#449cff'
    }
  },
  series: [
    {
      type: 'radar',
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#44ff86'
            }, {
              offset: 1,
              color: '#0060ff'
            }],
            globalCoord: false
          }
        }
      },
      lineStyle: {
        normal: {
          color: '#00ffff',
          width: 3
        }
      },
      data: [
        {
          value: [85, 90, 80, 85, 60, 40, 85, 55],
          symbol: 'circle',
          symbolSize: 6,
          itemStyle: {
            normal: {
              color: '#01eef0'
            }
          }
        }
      ]
    }
  ]
}
export default {
  data () {
    return {
      // echarts
      ec: {
        options: options
      },
      // 遮罩是否显示
      spinShow: true
    }
  },

  methods: {
  },

  onLoad () {
    setTimeout(() => {
      this.spinShow = false
    }, 1888)
  }
}
</script>

<style scoped>
.skill,
.skll-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.skll-container {
  position: relative;
}
</style>
