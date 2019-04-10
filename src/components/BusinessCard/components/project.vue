<template>
  <div class="project">
    <i-collapse :name="name">
      <i-collapse-item
        v-for="item in projectArr"
        i-class-title="item-title"
        :key="item.name"
        :name="item.name"
        :title="item.title"
      >
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
          title: '基础信息平台',
          time: '2018.12.10 - 至今',
          address: '',
          intro: '为方便项目运维所开发的一套管理平台，包含系统管理、学校管理和机构管理。',
          contribution: ['参与前端基础组件库的开发；', '完成个人所负责模块的开发。', '所用技术：Vue全家桶、TypeScript、iView']
        },
        {
          name: 'item2',
          title: '限时练V2.2',
          time: '2018.09.17 - 2018.09.29',
          address: 'http://www.xuexin.org.cn/smartCampus/training',
          intro: '用户批量下载提分方案功能优化。',
          contribution: ['负责优化功能前端部分的修改。']
        },
        {
          name: 'item3',
          title: '限时练V3.0 - 学业评价',
          time: '2018.06.25 - 2018.09.14',
          address: 'http://www.xuexin.org.cn/smartCampus/training',
          intro: '学业评价系统，从考试、班级、知识点等不同维度统计和展示学生的学习情况。',
          contribution: ['HTML转PDF前端分页；', '参与前端基础组件库的开发；', '完成个人所负责模块的开发。', '所用技术：Vue全家桶、TypeScript、iView']
        },
        {
          name: 'item4',
          title: '限时练V2.0 - 提分方案',
          time: '2018.05.02 - 2018.06.13',
          address: 'http://www.xuexin.org.cn/smartCampus/training',
          intro: '学生提分系统，根据不同层级学生的学习情况，针对性定制练习题，并生成专属报告。',
          contribution: ['HTML转PDF前端分页；', '完成个人所负责模块的开发。', '所用技术：Vue全家桶、Element-UI']
        },
        {
          name: 'item5',
          title: 'ADTS3.0（自动拨测系统）',
          time: '2018.02 - 2018.04',
          address: '',
          intro: '探针管理平台，需对接专业设备，包含实时监测、数据分析及配置管理三大模块。',
          contribution: ['独立完成前端页面的开发。', '所用技术：Vue']
        },
        {
          name: 'item6',
          title: 'TrinityAres-IPS（吉视传媒信息发布系统）',
          time: '2017.11 - 2018.01',
          address: '',
          intro: '吉视传媒内部信息发布平台、包含信息发布及回复和报表导出等功能。',
          contribution: ['需求文档的编写及原型图的绘制；', '负责项目的服务端开发；', '负责整个项目的维护工作；', '所用技术：Express、MySQL']
        },
        {
          name: 'item7',
          title: 'TrinityAres-UBA（用户行为分析系统）',
          time: '2018.9 - 2017.10',
          address: '',
          intro: '广电用户行为分析系统，帮助客户了解各类节目的受欢迎程度以及各地用户的行为偏好。',
          contribution: ['独立完成前端页面的开发；', '所用技术：Vue、ECharts']
        },
        {
          name: 'item8',
          title: 'BHCDN80（CDN注入监测探针系统）',
          time: '2017.08 - 2017.09',
          address: '',
          intro: '为公司生产的硬件设备所开发的软件，包含实时监测、统计分析和系统配置三大模块。',
          contribution: ['完成个人所负责前端模块的开发；', '去国网现场进行设备对接测试；', '所用技术：Vue']
        },
        {
          name: 'item9',
          title: 'TrinityAres-VEGAS（新媒体平台监测系统）',
          time: '2017.04 - 2017.07',
          address: '',
          intro: '广电运维监测系统，含值班台、实时监测、终端排障、运营分析、统计查询和业务配置6大模块。',
          contribution: ['完成个人所负责前端模块的开发；', '所用技术：Angular1.0、ECharts']
        }
      ]
    }
  }
}
</script>

<style scoped>
.project >>> .item-title {
  font: 700 16px "Microsoft Yahei";
}
.item-content {
  font-size: 14px;
  color: #515a6e;
}
.sub-item {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  border: 1px solid #000;
  border-top: none;
  line-height: 1.5em;
}
.sub-item:first-child {
  border-top: 1px solid #000;
}
.sub-title {
  color: black;
  padding: 2px 8rpx;
  min-width: 60px;
  text-align: center;
}
.sub-content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 2px 8rpx;
  border-left: 1px solid #000;
  word-break: break-all;
}
.contribution {
  display: -webkit-flex;
  display: flex;
}
.contribution-content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding-left: 6rpx;
}
</style>
