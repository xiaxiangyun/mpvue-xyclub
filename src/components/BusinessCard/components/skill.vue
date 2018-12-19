<template>
  <div class="skill">
    <i-spin fix v-if="spinShow"></i-spin>
    <div class="canvas">
      <div class="title" v-show="!spinShow">前端技能掌握图谱</div>
      <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
    </div>
    <div class="explain">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam at porro dignissimos error iste vitae veniam, natus officiis eveniet doloribus ratione similique odit. Perspiciatis autem doloribus iusto dolorem labore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam at porro dignissimos error iste vitae veniam, natus officiis eveniet doloribus ratione similique odit. Perspiciatis autem doloribus iusto dolorem labore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam at porro dignissimos error iste vitae veniam, natus officiis eveniet doloribus ratione similique odit. Perspiciatis autem doloribus iusto dolorem labore.</p>
    </div>
  </div>
</template>

<script>
const options = {
  backgroundColor: 'rgba(132, 175, 155, 0.4)',
  radar: {
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#2c3e50',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: 'H5C3', max: 100 },
      { name: 'Vue', max: 100 },
      { name: 'Node', max: 100 },
      { name: 'Javascript', max: 100 },
      { name: 'Git', max: 100 },
      { name: 'Yarn', max: 100 }
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
          value: [90, 90, 60, 80, 80, 90],
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

  methods: {},

  onLoad () {
    setTimeout(() => {
      this.spinShow = false
    }, 1500)
  }
}
</script>

<style scoped>
.skill, .canvas {
  height: 100%;
  width: 100%;
}
.canvas {
  position: relative;
}
.title {
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
}
</style>
