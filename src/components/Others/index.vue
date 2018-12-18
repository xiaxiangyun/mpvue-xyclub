<template>
  <div class="other">
    <div class="other-container">
      <img src="/static/img/coming.jpg" class="img">
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
.other, .other-container, .img {
  height: 100%;
  width: 100%;
}
</style>
