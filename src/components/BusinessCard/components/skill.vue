<template>
  <div class="skill">
    <div class="skill-container" @click="turnover">
      <div class="canvas" :class="{ 'canvas-back': isBack }">
        <i-spin fix v-if="spinShow"></i-spin>
        <i-notice-bar icon="systemprompt" closable class="tips">
          单击页面可查看详细信息
        </i-notice-bar>
        <div class="title" v-if="!spinShow">前端技能掌握图谱</div>
        <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec" :class="{ 'v-hidden': isHidden }"></ec-canvas>
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
      isBack: false,
      // 隐藏canvas
      isHidden: false
    }
  },

  methods: {
    turnover () {
      this.isBack = !this.isBack
      if (this.isBack) {
        this.isHidden = this.isBack
      } else {
        setTimeout(() => {
          this.isHidden = this.isBack
        }, 650)
      }
    }
  },

  onLoad () {
    setTimeout(() => {
      this.spinShow = false
    }, 2000)
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
  perspective: 600px;
}
.canvas, .explain {
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}
.canvas {
  overflow: hidden;
  background: #cbe2d8;
}
.explain {
  transform: rotateY(-180deg);
  background: #f1f5f7;
}
.canvas-back {
  transform: rotateY(180deg);
}
.v-hidden {
  display: none;
}
.explain-back {
  transform: rotateY(0deg);
}
.tips {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
}
.title {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  z-index: 88;
}
</style>
