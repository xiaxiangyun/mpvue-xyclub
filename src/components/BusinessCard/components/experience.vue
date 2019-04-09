<template>
  <div class="experience">
    <i-collapse :name="name">
      <i-collapse-item name="work" title="职业经历" i-class-title="item-title">
        <div slot="content" class="item-content">
          <i-card title="为明教育集团" extra="前端开发" thumb="../../img/weiming_logo.jpg">
            <div slot="content" class="item-content-work">{{wmWork}}</div>
            <div slot="footer">2018.04 - 至今</div>
          </i-card>
          <i-divider content="这是一条华丽的分割线"></i-divider>
          <i-card title="北京博汇科技" extra="前端开发" thumb="../../img/bohui_logo.jpg">
            <div slot="content" class="item-content-work">{{bhWork}}</div>
            <div slot="footer">2017.04 - 2018.04</div>
          </i-card>
        </div>
      </i-collapse-item>
      <i-collapse-item name="study" title="教育经历" i-class-title="item-title">
        <div slot="content" class="item-content">
          <i-card title="成都理工大学" extra="土木工程" thumb="../../img/cdut_logo.jpeg">
            <div slot="content" class="item-content-work">{{cdut}}</div>
            <div slot="footer">2011.09 - 2015.06</div>
          </i-card>
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
      name: 'work',
      // 为明工作介绍
      wmWork: '1. 负责公司产品前端页面的开发\r\n2. 负责公司产品前端基础组件库的开发\r\n3. 负责公司Web端产品的维护及更新迭代',
      // 博汇工作介绍
      bhWork: '1. 负责公司产品前端页面的开发\r\n2. 负责公司Web端产品的维护及更新迭代\r\n3. 参与过node.js服务端开发\r\n4. 参与过原型图设计及需求文档的编写',
      // 学习介绍
      cdut: '穷究于理，成就于工。'
    }
  }
}
</script>

<style scoped>
.experience >>> .item-title {
  font: 700 16px "Microsoft Yahei";
}
.item-content {
  font-size: 14px;
  color: #515a6e;
}
.item-content-work {
  white-space: pre-wrap;
}
</style>
