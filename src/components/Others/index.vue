<template>
  <div class="other">
    <div class="other-container">
      <img src="/static/img/scenery.jpg" class="image">
      <div class="words">—— 敬请期待 ——</div>
    </div>
    <logincheck tips="登录后可体验更多功能"/>
  </div>
  
</template>

<script>
import logincheck from '../LoginCheck'

export default {
  components: { logincheck },

  data () {
    return {}
  },

  computed: {},

  methods: {}
}
</script>

<style scoped>
.other, .other-container, .image {
  height: 100%;
  width: 100%;
}
.words {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
}
</style>
