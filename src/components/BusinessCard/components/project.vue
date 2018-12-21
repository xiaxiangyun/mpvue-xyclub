<template>
  <div class="project">
    <i-collapse :name="name">
      <i-collapse-item v-for="item in projectArr" :key="item.name" :name="item.name" :title="item.title" i-class-title="item-title">
        <div slot="content" class="item-content">
          <div class="sub-item">
            <span class="sub-title">开发周期</span>
            <span class="sub-content">{{item.time}}</span>
          </div>
          <div class="sub-item">
            <span class="sub-title">项目简介</span>
            <span class="sub-content">{{item.intro}}</span>
          </div>
          <div class="sub-item" v-if="item.address">
            <span class="sub-title">项目地址</span>
            <span class="sub-content">{{item.address}}</span>
          </div>
          <div class="sub-item">
            <span class="sub-title">主要贡献</span>
            <span class="sub-content">
              <div v-for="(sub, num) in item.contribution" :key="num" class="contribution">
                <span>{{num + 1}}.</span>
                <span class="contribution-content">{{sub}}</span>
              </div>
            </span>
          </div>
        </div>
      </i-collapse-item>
    </i-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 默认打开的面板
      name: 'item1',
      // 项目集合
      projectArr: [
        {
          name: 'item1',
          title: '项目1',
          time: '2019.10.10 - 2019.10.10',
          address: 'www.xiaxiangyun.com',
          intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis similique adipisci nisi ex quae. Reprehenderit, inventore voluptate necessitatibus maxime atque aliquam fugiat dolore enim numquam eaque ratione. Perspiciatis, temporibus cumque?',
          contribution: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis similique adipi', 'etur adipisicing elit. Perspiciatis similique adipisci nisi e', '345']
        }
      ]
    }
  }
}
</script>

<style scoped>
.project >>> .item-title {
  font: 700 16px 'Microsoft Yahei';
}
.item-content {
  font-size: 14px;
  color: #515a6e;
}
.sub-item {
  display: flex;
  border: 1px solid #000;
  border-top: none;
  align-items: center;
}
.sub-item:first-child {
  border-top: 1px solid #000;
}
.sub-title {
  color: black;
  padding: 2px 8rpx;
}
.sub-content {
  flex: 1;
  padding: 2px 8rpx;
  border-left: 1px solid #000;
}
.contribution {
  display: flex;
}
.contribution-content {
  flex: 1;
  padding-left: 6rpx;
}
</style>
