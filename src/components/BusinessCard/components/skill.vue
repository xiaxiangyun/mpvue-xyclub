<template>
  <div class="skill">
    <i-spin fix v-if="spinShow"></i-spin>
    <div class="skill-container" @click="turnover">
      <div class="canvas" :class="{ 'canvas-back': isBack }">
        <i-notice-bar icon="systemprompt" closable class="tips">
          单击页面可查看详细信息
        </i-notice-bar>
        <div class="title" v-show="!spinShow">前端技能掌握图谱</div>
        <ec-canvas class="canvas" id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec"></ec-canvas>
      </div>
      <div class="explain" :class="{ 'explain-back': isBack }">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam at porro dignissimos error iste vitae veniam, natus officiis eveniet doloribus ratione similique odit. Perspiciatis autem doloribus iusto dolorem labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam at porro dignissimos error iste vitae veniam, natus officiis eveniet doloribus ratione similique odit. Perspiciatis autem doloribus iusto dolorem labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quisquam at porro dignissimos error iste vitae veniam, natus officiis eveniet doloribus ratione similique odit. Perspiciatis autem doloribus iusto dolorem labore.</p>
      </div>
    </div>
  </div>
</template>

<script>
const options = {
  backgroundColor: 'rgba(132, 175, 155, 0.4)',
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
      spinShow: true,
      // 是否翻转
      isBack: false
    }
  },

  methods: {
    turnover () {
      this.isBack = !this.isBack
      console.log(this.isBack)
    }
  },

  onLoad () {
    setTimeout(() => {
      this.spinShow = false
    }, 1500)
  }
}
</script>

<style scoped>
.skill, .skill-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.skill-container {
  position: relative;
  perspective: 1000px;
}
.canvas, .explain {
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}
.canvas {
  overflow: hidden;
}
.explain {
  transform: rotateY(-180deg);
  background: #f1f5f7;
}
.canvas-back {
  transform: rotateY(180deg);
  opacity: 0;
}
.explain-back {
  transform: rotateY(0deg);
}
.tips {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.title {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}
</style>
